<template>
    <div class="row">
        <div class="col">
            <form class="form" method="post" @submit.prevent="registerNickname">
                <div class="form-group">
                    <label>Nickname</label>
                    <input type="text" v-model="username" placeholder="Enter a nickname..." class="form-control">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Start Chat</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {Mutation} from "vuex-class";

    @Component({
        // sockets: {
        //     connect() {
        //         console.log('socket connected')
        //     },
        //     customEmit(val) {
        //         console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        //     }
        // },
    })
    export default class SignUp extends Vue {

        // @Mutation('chat/SET_USERNAME') setUsername;

        username = null

        registerNickname() {
            console.log('registering nickname')
            console.log({options: this.$options})
            // this.$socket.send({message: 'join', data: this.username})
            //  this.setUsername(this.username);
            // // this.$socket.client.emit('join', this.username);
            //  this.$socket.send('join, this.username');
        }

        // clickButton(val) {
        //     // this.$socket.client is `socket.io-client` instance
        //     this.$socket.client.emit('emit_method', val);
        // }
    }
</script>

