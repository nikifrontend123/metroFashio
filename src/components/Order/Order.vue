<template>
    <div>
        <div class="first h-100 ">
            <div class="box w-100 shadow p-2">
                <div class="d-block d-md-flex justify-content-center">
                <TextInputs class="w-75" name="Search Order Id " type="text" design="floating" />
                <div class="btnsar d-flex align-items-center w-25">
                    <button class="btn fs-5">Export</button>
                    <button class="btn fs-5">Rest</button>
                    <button class="btn fs-5">Filters</button>
                </div>
            </div>
            
            <div class="d-block d-md-flex justify-content-center">
                <TextInputs class="w-100" name="Start Date" type="date" design="floating" />
                <TextInputs class="w-100" name="End Date " type="date" design="floating" />
                <div class="form-floating w-100 ">
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Select Assignee</option>
                        <option value="1">Name (A to Z)</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Filters By Assignee</label>
                </div>
                <div class="form-floating w-100 ">
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>All Orders</option>
                        <option value="1">Name (A to Z)</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Choose Order Stage</label>
                </div>
                <div class="form-floating w-100 ">
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Sort Order By</option>
                        <option value="1">Name (A to Z)</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Latest Assigned</label>
                </div>
            </div>
            </div>
        </div>
        <div class="list  mt-3" style="padding-bottom: 80px;">
            <div v-for="order in orders" class="d-flex justify-content-center">
                <div @click="showOrder(order)" class="btn border-secondary my-1 p-1">
                    <div class="top d-flex justify-content-between  w-100 ">
                        <div class="dp ">
                            <img :src="order.imgdp" width="50" alt="">
                        </div>
                        <div class="txt text-start">
                            <span>{{ order.tag }}</span>
                            <p><span>QTY:</span> {{ order.qty }}</p>
                        </div>
                        <div class="txt  ">
                            <span class="m-0 text-success"><i class="bi bi-arrow-down"></i>{{ order.down }}</span>
                            <hr class="m-0">
                            <p class="m-0 text-danger">{{ order.up }} <i class="bi bi-arrow-up"></i></p>
                        </div>
                    </div>

                    <img :src="order.imgl" alt="">

                </div>
            </div>
            <!-- Modal -->
            <div v-if="Object.keys(activeOrder).length !== 0">
                <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel">
                    <div class=" head px-3 pt-3 d-flex justify-content-between">
                        <div class="d-flex justify-content-center ">
                            <div class="">
                                <b>{{ activeOrder.tag }}</b> <b>|</b> <b>{{ activeOrder.qty }}</b>
                                <p class="m-0">{{ activeOrder.time }}</p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end align-items-center ">
                            <button type="button" class="btn eabtn fs-5 text-secondary p-0 me-3 "><i
                                    class="bi bi-chevron-down"></i></button>
                            <button type="button" class="btn eabtn fs-5 text-secondary p-0 me-3 "><i
                                    class="bi bi-pencil"></i></button>
                            <button type="button" class="btn eabtn fs-5 text-secondary p-0 me-3 " @click="hideOrder()">
                                <i class="bi bi-x-lg fs-5"></i>
                            </button>
                        </div>

                    </div>
                    <div class="offcanvas-body mt-2">
                        <div class="a1 ">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button bg-info text-white" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            Order Chats
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <TextInputs class="w-100 " name="message" type="text" design="floating" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="a2 mt-2">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed bg-success text-white" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            Progress Stage
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div class="body border border-3 border-success">
                                            <span class="text-success" style="font-size: 14px;"><i
                                                    class="bi bi-check2-circle"></i> New Order Posted</span> <br>
                                            <div class="bg-warning d-flex justify-content-between">

                                                <div class="d-flex justify-content-center align-items-center ">
                                                    <div class="d-flex justify-content-center align-items-center mx-2 fs-5">
                                                        <i class="bi bi-clock-history "></i>
                                                    </div>
                                                    <div class="">
                                                        <p class="m-0">Accept Order</p>
                                                        <p class="m-0">Pending At Jyoti Garments</p>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-center m-1">
                                                    <button class="bg-primary border-0 text-white m-1 p-2 rounded "><i
                                                            class="bi bi-telephone-forward"></i></button>
                                                    <button class="bg-success border-0 text-white m-1 p-2 rounded "><i
                                                            class="bi bi-whatsapp"></i></button>
                                                </div>
                                            </div>
                                            <div class="p-2">
                                                <span class="text-danger" style="font-size: 14px;"><i
                                                        class="bi bi-dash-circle"></i> Manager Has Accepted</span> <br>
                                                <span class="text-danger" style="font-size: 14px;"><i
                                                        class="bi bi-dash-circle"></i> Material is Available At
                                                    Godown</span>
                                                <br>
                                                <span class="text-danger" style="font-size: 14px;"><i
                                                        class="bi bi-dash-circle"></i> Material is Arrange For
                                                    Delivery</span>
                                                <br>
                                                <span class="text-danger" style="font-size: 14px;"><i
                                                        class="bi bi-dash-circle"></i> Material Delivery To Assignee</span>
                                                <br>
                                                <span class="text-danger" style="font-size: 14px;"><i
                                                        class="bi bi-dash-circle"></i> Production Has Started</span> <br>
                                                <span class="text-danger" style="font-size: 14px;"><i
                                                        class="bi bi-dash-circle"></i> Order is Available For
                                                    Dispatch</span>
                                                <br>
                                                <span class="text-danger" style="font-size: 14px;"><i
                                                        class="bi bi-dash-circle"></i> Order Completely Dispatched</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TextInputs from '../InputsType/TextInputs.vue';
export default {
    components: {
        TextInputs
    },
    computed: {
        orders() {
            return this.$store.getters.getOrders;
        },
        activeOrder() {
            return this.$store.getters.getOrder;
        },

    },
    methods: {
        showOrder(order) {
            return this.$store.dispatch('selectOrder', order);
        },
        hideOrder() {
            return this.$store.dispatch('hideOrder');
        }

    }

}
</script>

<style scoped>
@media only screen and (max-width: 600px) {
    .list {
        display: grid;
        grid-template-columns: 1fr;
    }

    .btnlist img {
        width: 280px;
        height: 300px;
        /* overflow: auto; */
    }

    .btnsar {
        margin-top: 10px;
    }
}

@media only screen and (min-width: 601px) {
    .list {
        margin: 10px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    }

    .come-from-modal.right .modal-dialog {
        position: fixed;
        margin: auto;
        width: 500px;
        height: 100%;
    }

    .come-from-modal.right .modal-content {
        height: 100%;
        overflow-y: auto;
        border-radius: 0px;
    }

    .come-from-modal.right.fade .modal-dialog {
        right: 0px;
    }
}

.eabtn i:hover {
    color: black;
}</style>