<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 50px; background-size: cover; background-position: center top;">

        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-12 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-4">
                                    <h3 class="mb-0">견적/판매 작성</h3>
                                </div>
                                <div class="col-8 text-right">
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">업체정보</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="업체명"
                                                        placeholder="업체명"
                                                        input-classes="form-control-alternative"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="납품장소"
                                                        placeholder="납품장소"
                                                        input-classes="form-control-alternative"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <span class="text-black-50">총 미수금: 300,000,000원</span>
                                        </div>
                                        <div class="col-lg-3">

                                        </div>

                                    </div>
                                </div>
                                <hr class="my-4" />
                                <h6 class="heading-small text-muted mb-4">세부내역</h6>
                                <div class="row">
                                    <div class="col-12 text-right border-0 ">
                                        <base-button outline type="primary" size="sm"  icon="ni ni-atom">이전내역 복사</base-button>
                                        <base-button outline type="primary" size="sm"  icon="ni ni-atom">추가</base-button>
                                        <p/>
                                    </div>
                                    <div class="col-12">
                                        <base-table thead-classes="thead-light"
                                                    >
                                            <template slot="columns">
                                                <th>품목</th>
                                                <th>규격</th>
                                                <th>수량</th>
                                                <th>단위</th>
                                                <th>단가</th>
                                                <th>금액</th>
                                            </template>

                                            <template>
                                                <td scope="row">
                                                </td>
                                                <td>
                                                </td>
                                                <td>
                                                </td>
                                                <td>
                                                </td>
                                                <td>
                                                </td>
                                                <td>
                                                </td>
                                            </template>

                                        </base-table>
                                    </div>

                                </div>
                                <hr class="my-4" />
                                <h6 class="heading-small text-muted mb-4">판매내역</h6>
                                <div class="row">


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
    export default {
        name: "Sheets"
    }
</script>

<style scoped>

</style>
