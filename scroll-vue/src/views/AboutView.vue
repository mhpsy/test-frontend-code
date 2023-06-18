<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import {gsap} from "gsap";

const about = ref(null)

onMounted(() => {
    gsap.from(about.value, {
        opacity: 0,
        y: 100,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: "power4.out",
    })
})

</script>

<template>
    <div class="about">
        <h1 ref="about">about</h1>
        123123
        <div class="bo"></div>
    </div>
</template>

<style scoped>
h1 {
    border: 1px red solid;
}

.bo {
    height: 150vh;

}
</style>
