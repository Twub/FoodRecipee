<script setup>
const props = defineProps({
  digit: Number,
});
</script>

<template>
  <div class="analog-clock-digit-line"></div>
  <div class="analog-clock-digit-container">
    <div class="analog-clock-digit">
      <!-- {{ digit }} --> 
    </div>
  </div>
</template>

<style scoped>
.analog-clock-digit-line {
  position: absolute;
  width: 1%;
  height: 25%;
  top: 50%;
  left: 50%;
  transform-origin: bottom center;
  transform: translate(-50%, -100%) rotate(calc(v-bind(digit) * 30deg)) translate(0%, -100%);
  background-color: black;
}

.analog-clock-digit-container {
  position: absolute;
  width: 1%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform-origin: bottom center;
  transform: translate(-50%, -100%) rotate(calc(v-bind(digit) * 30deg));
}

.analog-clock-digit2 {
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1vw;
  width: 1.5vw;
  height: 1.5vw;
  line-height: 1.5vw;
  text-align: center;
  background-color: darkgrey;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  transform: translate(-50%, 0%) rotate(calc(v-bind(digit) * -30deg));
}
</style>