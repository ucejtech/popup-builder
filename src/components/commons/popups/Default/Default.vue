<template>
  <div class="popup-circle">
    <div class="outer-circle"></div>
    <div class="inner-circle"></div>
    <p>Get Discount when you shop at</p>
    <input type="text" placeholder="ljsdhlgh" />
    <button>Get Discount</button>
    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DefaultPopup extends Vue {}
</script>

<style scoped>
.popup-circle {
  height: 500px;
  width: 500px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
}
.popup-circle .inner-circle {
  height: 500px;
  width: 500px;
  background: #df7a5e;
  border-radius: 50%;
  position: relative;
  padding: 10px 50px;
}
.popup-circle .outer-circle {
  position: absolute;
  background: transparent;
  border: 6px solid #df7a5e;
  height: 519px;
  width: 519px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
}
.popup-circle p {
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  max-width: 500px;
  position: absolute;
  top: 100px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
}
.popup-circle input {
  font-size: 27px;
  font-weight: bold;
  width: 400px;
  position: absolute;
  top: 220px;
  direction: rtl;
  border-radius: 7px;
  left: 50%;
  transform: translateX(-50%);
}
.popup-circle button {
  font-size: 22px;
  padding: 5px 0px;
  font-weight: bold;
  width: 400px;
  position: absolute;
  top: 290px;
  color: #fff;
  text-align: center;
  border-radius: 7px;
  background: #404143;
  left: 50%;
  transform: translateX(-50%);
}
.popup-circle span {
  font-size: 15px;
  padding: 5px 0px;
  font-weight: bold;
  width: 400px;
  position: absolute;
  top: 350px;
  color: #fff;
  text-align: center;
  border-radius: 7px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
