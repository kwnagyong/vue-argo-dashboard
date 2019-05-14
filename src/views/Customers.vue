<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 50px; background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                    </div>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">

                <div class="col-xl-3 order-xl-1 mb-5 mb-xl-0">

                    <div class="card card-profile shadow">
                        <MerchantTree></MerchantTree>
                    </div>
                </div>
                <div class="col-xl-9 order-xl-2">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-4">
                                    <h3 class="mb-0">고객정보</h3>
                                </div>
                                <div class="col-8 text-right">
                                    <base-button type="secondary" icon="ni ni-bag-17">견적서 작성하기</base-button>
                                    <base-button type="secondary" icon="ni ni-bag-17">전표 작성하기</base-button>
                                    <base-button type="primary">변경된 고객정보 저장하기</base-button>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">회사정보</h6>
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
                                                        label="대표자명"
                                                        placeholder="홍길동"
                                                        input-classes="form-control-alternative"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="대표 전화번호"
                                                        placeholder="123-456-789"
                                                        input-classes="form-control-alternative"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="대표 팩스번호"
                                                        placeholder="123-456-789"
                                                        input-classes="form-control-alternative"
                                            />
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <base-input alternative=""
                                                        label="주소"
                                                        placeholder="서울특별시 강남구 논현동 170-4"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.address"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="사업자 번호"
                                                        placeholder="123-456-789"
                                                        input-classes="form-control-alternative"

                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="업태"
                                                        placeholder="업태"
                                                        input-classes="form-control-alternative"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="종목"
                                                        placeholder="종목"
                                                        input-classes="form-control-alternative"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Address -->
                                <h6 class="heading-small text-muted mb-4">담당자 정보</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <base-checkbox class="mb-3">
                                            위 정보와 동일
                                        </base-checkbox>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-3">
                                            <base-input alternative=""
                                                        label="담당자명"
                                                        placeholder="홍길동"
                                                        input-classes="form-control-alternative"
                                            />
                                        </div>
                                        <div class="col-lg-3">
                                            <base-input alternative=""
                                                        label="직급"
                                                        placeholder="과장"
                                                        input-classes="form-control-alternative"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="담당자이메일"
                                                        placeholder="pky1030@gmail.com"
                                                        input-classes="form-control-alternative"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <base-input alternative=""
                                                        label="담당자 전화번호"
                                                        placeholder="123-456-789"
                                                        input-classes="form-control-alternative"
                                            />
                                        </div>
                                        <div class="col-lg-3">
                                            <base-input alternative=""
                                                        label="담당자 팩스번호"
                                                        placeholder="123-456-789"
                                                        input-classes="form-control-alternative"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="휴대 전화번호"
                                                        placeholder="123-456-789"
                                                        input-classes="form-control-alternative"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Description -->
                                <h6 class="heading-small text-muted mb-4">기타</h6>
                                <div class="pl-lg-4">
                                    <div class="form-group">
                                        <base-input alternative=""
                                                    label="메모">
                                            <textarea rows="4" class="form-control form-control-alternative" placeholder="A few words about you ...">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea>
                                        </base-input>
                                    </div>
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
  import MerchantTree from "../components/MerchantTree";
  export default {
    name: 'customers',
      components: {MerchantTree},
      data() {
      return {
        model: {
          username: '',
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          country: '',
          zipCode: '',
          about: '',
        }
      }
    },
  };
</script>
<style></style>
