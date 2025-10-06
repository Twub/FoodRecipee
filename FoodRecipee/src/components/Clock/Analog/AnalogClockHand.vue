<script setup>
import { computed } from 'vue';

const props = defineProps({
    position: Number,
    positionMax: Number,
    length: String,
})

const rotation = computed(() =>
    180 + Math.round((360 * props.position) / props.positionMax) + "deg"
);

</script>

<template>
    <div class="analog-clock-hand"></div>
</template>

<style scoped>
.analog-clock-hand {
    position: absolute;
    width: 0.5%;
    height: 50%;
    background-color: black;
    top: 50%;
    left: 50%;
    transform-origin: top center;
    transform: translate(-50%, 0%) rotate(v-bind(rotation));
    border-radius: 8px;
    border-width: 4px;
    border-style: solid;
    border-color: black;
    box-sizing: border-box;
}
</style>