<script setup>
import { ref, computed, onMounted, onBeforeUnmount} from 'vue'
import AnalogClockHand from './AnalogClockHand.vue'
import AnalogClockDigit from '../Analog/AnalogClockDigit.vue'

const currentDate = ref(new Date())
const hours = computed(() => currentDate.value.getHours())
const minutes = computed(() => currentDate.value.getMinutes())
const seconds = computed(() => currentDate.value.getSeconds())

function updateCurrentDate() {
    currentDate.value = new Date()
    console.log('Tick', currentDate.value.getMilliseconds())
    getNextTick()
}

let timeout = null

function getNextTick() {
    const miliseconds = (new Date()).getMilliseconds()
    timeout = setTimeout(updateCurrentDate, 1000 - miliseconds)
}

onMounted(() => {
    getNextTick()
})

onBeforeUnmount(() => {
    clearTimeout(timeout)
})

const clockMargin = ref('24px')
</script>

<template>
    <div class="mc-clock-area">
        <AnalogClockDigit v-for="index in 12" :key="indes" :digit="index"></AnalogClockDigit>
        <AnalogClockHand :position="hours" :positionMax="24" length="41%"></AnalogClockHand>
        <AnalogClockHand :position="minutes" :positionMax="60" length="48%"></AnalogClockHand>
        <AnalogClockHand :position="seconds" :positionMax="60" length="55%"></AnalogClockHand>
    </div>
</template>

<style scoped>
.mc-clock-area {
    margin: v-bind(clockMargin);
    position: relative;
    width: calc(100% - v-bind(clockMargin) * 2);
    aspect-ratio: 1;
    background-color: white;
    border-radius: 50%;
    border-width: 5px;
    border-style: solid;
    border-color: black;
    box-sizing: border-box;
}
</style>