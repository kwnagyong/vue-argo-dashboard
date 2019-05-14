
<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 50px; background-size: cover; background-position: center top;">

        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">

                <div class="col-xl-3 order-xl-1 mb-5 mb-xl-0">

                    <div class="card card-profile shadow">

                        <div class="card-header text-right border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                            <base-button size="sm" type="default">Message</base-button>
                        </div>
                        <div class="card-body pt-0 pt-md-4">
                            <div class="row">
                                <div class="col-12">
                                    <ArticleTree></ArticleTree>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-9 order-xl-2">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-4">
                                    <h3 class="mb-0">품목정보</h3>
                                </div>
                                <div class="col-8 text-right">
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">기본정보</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <base-input alternative=""
                                                        placeholder="품목명"
                                                        input-classes="form-control-alternative"
                                            />
                                            <base-button outline type="default" icon="ni ni-atom"></base-button>
                                        </div>
                                        <div class="col-lg-3">
                                            <base-input alternative=""

                                                        placeholder="품목분류"
                                                        input-classes="form-control-alternative"
                                            />
                                        </div>
                                        <div class="col-lg-3">
                                            <base-input alternative=""

                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                            />
                                        </div>
                                        <div class="col-lg-3">
                                            <base-input alternative=""
                                                        placeholder="box"
                                                        input-classes="form-control-alternative"
                                            />
                                        </div>

                                    </div>
                                </div>
                                <hr class="my-4" />
                                <h6 class="heading-small text-muted mb-4">매입내역</h6>
                                <div class="row">
                                    <div class="col-12 text-right border-0 ">
                                        <base-button outline type="primary" size="sm"  icon="ni ni-atom">추가</base-button>
                                        <p/>
                                    </div>

                                    <div class="col-12">
                                        <base-table thead-classes="thead-light"
                                                    :data="tableData">
                                            <template slot="columns">
                                                <th>매입일</th>
                                                <th>매입단가</th>
                                                <th>매입수</th>
                                            </template>

                                            <template slot-scope="{row}">
                                                <th scope="row">
                                                    {{row.date}}
                                                </th>
                                                <td>
                                                    {{row.unitPrice}}
                                                </td>
                                                <td>
                                                    {{row.qty}}
                                                </td>
                                            </template>

                                        </base-table>
                                        </div>
                                </div>
                                <hr class="my-4" />
                                <h6 class="heading-small text-muted mb-4">판매내역</h6>
                                <div class="row">

                                    <base-table thead-classes="thead-light"
                                                :data="tableData1">
                                        <template slot="columns">
                                            <th>납품일</th>
                                            <th>고객명</th>
                                            <th>납품수</th>
                                        </template>

                                        <template slot-scope="{row}">
                                            <th scope="row">
                                                {{row.date}}
                                            </th>
                                            <td>
                                                {{row.customerName}}
                                            </td>
                                            <td>
                                                {{row.qty}}
                                            </td>
                                        </template>

                                    </base-table>
                                </div>

                            </form>
                        </template>
                    </card>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import ArticleTree from "../components/ArticlesTree";
    export default {
        name: "Articles",
        components: {ArticleTree},
        data: () => ({
            tableData: [
                { date: '2018-09-12', unitPrice: "3,000", qty: 3},

            ],
            tableData1: [
                { date: '2018-09-12', customerName: "박광용", qty: 3},

            ]
        })
    }
</script>

<style scoped>

</style>
