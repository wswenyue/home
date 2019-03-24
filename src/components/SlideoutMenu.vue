<template>
    <nav class="menu-bar" :class="{'show': show}">
        <ul class="menu-list">
            <li class="menu-item">
                <router-link class="" :to="{name: 'index', query: {tab: 'all'}}">
                    <svg class="icon iconfont" aria-hidden="true">
                        <use xlink:href="#icon-yumi"></use>
                    </svg>
                    全部
                </router-link>
            </li>
            <li class="menu-item">
                <router-link :to="{name: 'index', query: {tab: 'good'}}">
                    <svg class="icon iconfont" aria-hidden="true">
                        <use xlink:href="#icon-lajiao"></use>
                    </svg>
                    精华
                </router-link>
            </li>
            <li class="menu-item">
                <router-link :to="{name: 'index', query: {tab: 'ask'}}">
                    <svg class="icon iconfont" aria-hidden="true">
                        <use xlink:href="#icon-mogu"></use>
                    </svg>
                    问答
                </router-link>
            </li>
            <li class="menu-item">
                <router-link :to="{name: 'test'}" style="position: relative">
                    <svg class="icon iconfont " aria-hidden="true">
                        <use xlink:href="#icon-xigua"></use>
                    </svg>
                    消息
                    <span class="message-count " v-text="`+${messageCount}`" v-if="messageCount"></span>
                </router-link>
            </li>
            <li class="menu-item">
                <router-link :to="{name: 'test'}">
                    <svg class="icon iconfont" aria-hidden="true">
                        <use xlink:href="#icon-dacong"></use>
                    </svg>
                    关于
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="less">
    .message-count {
        position: absolute;
        color: red;
        left: 40px;
        top: 15px;
    }
</style>

<script>
    import '../styles/menu.less';

    export default {
        data() {
            return {
                messageCount: 0
            }
        },

        mounted() {
            this.getMessageCount();
        },

        methods: {
            getMessageCount() {
                this.messageCount = 5;
            }
        },

        props: {
            show: Boolean
        }

    }
</script>