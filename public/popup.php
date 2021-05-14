<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
error_reporting(E_ALL);

if (isset($_POST['save-popup'])) {
    $content = $_POST['popup-content'];
    $id = $_POST['popup-id'];

    $directoryPath = "./popups/" . $id;
    $newFileName =  $directoryPath . "/public.html";

    if (!file_exists($directoryPath)) {
        mkdir($directoryPath, 0777, true);
    }

    $animationCss = "./popups/" . $id . "/_animation.css";
    $source = "./_animation.css";

    // Copy the file from /user/desktop/geek.txt 
    // to user/Downloads/geeksforgeeks.txt'
    // directory
    if (!copy($source, $animationCss)) {
        echo "File can't be copied! \n";
    } else {
        echo "File has been copied! \n";
    }


    if (file_put_contents($newFileName, $content) !== false) {
        echo "File created (" . basename($newFileName) . ")";
    } else {
        echo "Cannot create file (" . basename($newFileName) . ")";
        die('Unable to upload');
    }

    // $myfile = fopen("./popups/" . $id . "/public.html", "w") or die("Unable to open file!");
    // fwrite($file, $content);
    // fclose($myfile);
}

echo "Welcome";
