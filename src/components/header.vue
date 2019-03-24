<template>
    <div>
        <span class="page-cover"
              @click="toggleMenu"
              v-if="show">
        </span>
        <header class="header-bar">

            <span class="menu-btn"
                  @click="toggleMenu"></span>
            <span class="info">
                <span class="vue-logo"></span>
                <span>{{title}}</span>
            </span>
            <router-link :to="{name: 'create'}" class="publish-btn">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-lajiao"></use>
                </svg>
            </router-link>
        </header>
        <slide_menu :show="show"></slide_menu>
    </div>
</template>

<style>

</style>

<script>
    import '../styles/header.less';
    import slide_menu from './SlideoutMenu'

    export default {
        data() {
            return {
                show: false
            }
        },

        props: {
            title: {
                type: String,
                default: ''
            }
        },

        methods: {
            toggleMenu() {
                this.show = !this.show;
            }
        },

        components: {
            slide_menu
        }
    }
</script>