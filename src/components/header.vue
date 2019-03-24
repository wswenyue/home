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
                <span>{{my_title}}</span>
            </span>
            <router-link :to="{name: 'test'}" class="publish-btn">
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
    import Bus from "../constants/Bus";

    export default {
        data() {
            return {
                show: false
            }
        },

        props: {
            my_title: {
                type: String,
                default: ''
            }
        },

        methods: {
            toggleMenu() {
                this.show = !this.show;
            }
        },


        created() {
            const self = this;
            this.$Bus.$on(Bus.KEY_UPDATE_TITLE, function (title) {
                console.log("------->" + Bus.KEY_UPDATE_TITLE);
                self.my_title = title;
                self.toggleMenu();
            });
        },

        beforeDestroy() {
            this.$Bus.$off(Bus.KEY_UPDATE_TITLE);
        },

        components: {
            slide_menu
        }
    };
</script>