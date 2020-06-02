<template>
    <vue-fixed-header
            :threshold="500"
            :headerClass="this.headerClass"
            :fixedClass="this.fixedClass"
            :hideScrollUp="this.hideScrollUp"
    >
        <nav>
            <div>박토리아</div>

            <router-link to="/Post" style="color: #42b983" > 포스트 </router-link>

            <div>
                <router-link to="/Login" style="color: #42b983" v-if="!this.isAuthenticated"> 로그인 </router-link>
                <LogoutButton v-if="this.isAuthenticated"></LogoutButton>
            </div>
        </nav>
    </vue-fixed-header>
</template>

<script>
    import VueFixedHeader from 'vue-fixed-header'
    import { mapGetters,  } from 'vuex'
    import LogoutButton from "../login/LogoutButton";

    export default {
        name: "Header",
        data() {
            return {
                threshold: 0,
                headerClass: "vue-fixed-header",
                fixedClass: "vue-fixed-header--isFixed",
                hideScrollUp: true
            }
        },
        computed: {
          ...mapGetters([
              'isAuthenticated'
          ])
        },
        components: {
            LogoutButton,
            VueFixedHeader
        },
        methods: {}
    }
</script>

<style>

    nav {
        display: flex;
        width: 100vw;
        margin: 0;
        padding: 30px 0;
        background: rgb(36,41,46);
        color: rgb(255,255,255);
   }

    nav.vue-fixed-header--isFixed {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        background-color: #42b983;
    }

</style>

