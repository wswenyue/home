<template>
    <div id="app">
        <nv_header></nv_header>
        <router-view></router-view>
    </div>
</template>

<script>
    import nv_header from './components/header.vue'

    export default {
        name: "app",
        components: {
            nv_header
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
