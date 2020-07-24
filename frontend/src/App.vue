<template>
    <div id="app" class="container-fluid">
        <router-view/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import router from "@/router";

    @Component({
        mounted() {
            // router.replace({name: 'sign-up'})
            const socket = this.$socket

            setTimeout(() => {
                const msg = {__type: "CreateUserCommand", __timestamp: Date.now().toString()}
                console.log("sending.")
                socket.send(JSON.stringify(msg))
            }, 1000)
        },
    })
    export default class App extends Vue {
    }
</script>
