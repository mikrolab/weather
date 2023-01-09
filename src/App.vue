<template>
    <div class="weather">
        <Navbar></Navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
    components: {
        Navbar
    }

}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.weather {
    display: flex;
    flex-flow: column;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
}
</style>