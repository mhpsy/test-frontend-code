<script setup>

</script>

<template>
    <div class="box">
        <div class="img-box"><img src="https://picsum.photos/200/300" alt="some image"></div>
        <div class="img-box"><img src="https://picsum.photos/200/300" alt="some image"></div>
        <div class="img-box"><img src="https://picsum.photos/200/300" alt="some image"></div>
        <div class="img-box"><img src="https://picsum.photos/200/300" alt="some image"></div>
    </div>
</template>

<style scoped>
.box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.img-box {
    flex: 1 0 calc(50% - 2rem);
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
}

img {
    width: 100%;
    //height: 100%;
}

.img-box:nth-child(even) {
    margin-left: 0.5rem;
}

.img-box:nth-child(odd) {
    margin-right: 0.5rem;
}

.img-box:not(:first-child), :not(:last-child) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

}




</style>