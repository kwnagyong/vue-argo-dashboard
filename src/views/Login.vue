<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">

                    <div class="card-body px-lg-5 py-lg-5">
                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="model.email">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Password"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.password">
                            </base-input>

                            <base-checkbox class="custom-control-alternative">
                                <span class="text-muted">아이디 기억하기</span>
                            </base-checkbox>
                            <div class="text-center">
                                <base-button type="primary" class="my-4" @click="this.signIn">로그인</base-button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-6">
                        <a href="#" class="text-light"><small>패스워드 초기화 요청</small></a>
                    </div>
                    <div class="col-6 text-right">

                    </div>
                </div>
            </div>
        </div>
</template>
<script>

    import { mapActions } from 'vuex';
    export default {
        name: 'login',
        data() {
            return {
                model: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {

            ...mapActions('user', [
                'fetchSignIn',
            ]),
            async signIn() {
                const isSucees = await this.fetchSignIn(this.model);
                if (isSucees) {
                    this.$router.push({
                        name: 'dashboard'
                    })
                }
            }
        }
    }

</script>
<style>
</style>
