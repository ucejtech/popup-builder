<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
error_reporting(E_ALL);

require "./vendor/autoload.php";

$databaseDirectory = __DIR__ . "/db";

$db = new \SleekDB\Store("popups", $databaseDirectory);


if (isset($_POST['save-popup'])) {
    $content = $_POST['popup-content'];
    $id = $_POST['popup-id'];

    $popup = [
        "popup-id" => $id,
        "content" => $content
    ];

    // check if popup already exists
    $popupExists = $db->findOneBy(["popup-id", "=", $id]);

    if (isset($popupExists)) {
        $db->updateById($popupExists['_id'], $popup);
    } else {
        $db->insert($popup, false);
    };

    echo 'Popup Saved';
}


if (isset($_GET['popup_id'])) {
    try {
        $popup = $db->findOneBy(["popup-id", "=", $_GET['popup_id']]);
        if (isset($popup)) {
            echo json_encode($popup);
        } else {
            $error = [
                "error" => true,
                "msg" => "popup not found"
            ];
            echo json_encode($error);
        }
    } catch (\Throwable $th) {
        $error = [
            "error" => true,
            "msg" => "Error occurred while fetching popup"
        ];
        echo json_encode($error);
    }
}
