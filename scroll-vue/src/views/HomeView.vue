<script setup>
import someImg from '@/components/some-img.vue'
import SomeImg2 from "../components/some-img2.vue";
</script>

<template>
    <main>
        <h1 class="main-h1" v-scroll-animation>Home</h1>
        <!--        <h1 class="main-h1 h1-other">Home</h1>-->
        <p>Home page content</p>
        <h1 class="main-h1" v-scroll-animation>Home</h1>
        <p v-scroll-animation>Home page content</p>
        <!--        <some-img2/>-->
        <!--        <some-img/>-->
        <div class="boxxx"></div>
    </main>
</template>

<style lang="less" scoped>
.h1-other {
  transform: translateY(200px);
}

.boxxx {
  height: 150vh;
}

main {
  margin: 0 auto;
  max-width: 800px;
  padding: 2rem;
}

.main-h1 {
  border: 1px red solid;
  font-size: 3rem;
  margin-bottom: 2rem;
  transition-delay: .5s !important;
  position: relative;
}

//.main-h1:after {
//    content: '';
//    display: block;
//    transform: translateY(-200px);
//    transition: .3s all ease;
//}


.scroll-animation {
  transition: .3s all ease;
}

.before-enter {
  opacity: 0;
  transform: translateY(200px);
}

.enter {
  opacity: 1;
  transform: translateY(0);
}
</style>
