<template>
    <div>
        <div class="card-header text-right border-0 pt-8 pt-md-4 pb-0 pb-md-4">
            <base-button size="sm" type="default" @click="addItem('test')">고객 추가</base-button>
        </div>
        <div class="card-body pt-0 pt-md-4">
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <div class="col-12">
                            <tree
                                    :options="options"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { mapActions, mapGetters} from 'vuex';


    export default {
        name: "MerchantTree",
        data() {
            return {
                options: {
                    store: {
                        store: this.$store,
                        getter: () => {
                            return this.$store.state.merchant.items
                        },
                        dispatcher: (tree) => {
                            this.updateItems(tree);
                        }
                    },

                }
            }
        },
        computed: {
            ...mapGetters('customer',[
                'getItems'
            ])
        },

        methods: {
            ...mapActions('customer', [
                'updateItems',
                'addItem'
            ])
        }
    }
</script>

<style scoped>

</style>
