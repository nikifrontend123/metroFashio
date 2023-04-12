<template>
    <div class="container">
        <div class="first">
            <div class="d-flex justify-content-between mx-2">
                <p class="fs-4 my-0 ">Welcome</p>
                <p>Admin</p>
            </div>
            <div class="d-flex justify-content-between mx-2">
                <h1>Dheeraj Sardar</h1>
                <div class="">
                    <p class="m-0">Last Session</p>
                    <p class="m-0 fw-semibold">2 Days Ago</p>
                </div>
            </div>
            <div class="d-flex justify-content-between mx-2">
                <div class="d-flex">
                    <p class="fs-5 m-0">New Notification</p>
                    <span class="badge bg-primary align-items-center d-flex ms-2">212</span>
                </div>
                <div class="">
                    <span
                        class="badge bg-light text-dark border border-dark fw-semibold align-items-center d-flex ms-2 btn">Mark
                        all Read</span>
                </div>
            </div>
        </div>
        <hr>
        <div class="seccc  container">
            <div v-for="noti in notis" class="d-flex position-relative my-2">
                <div class="img ">
                    <img :src="noti.imgl" width="100" alt="">
                </div>
                <div class="txt w-75 ms-3">
                    <p class="m-0">{{ noti.tag }}</p>
                    <p class="m-0">{{ noti.txt }}</p>
                    <div class="btns w-100 d-flex mt-4">
                        <RouterLink class="w-100" to="/CatelogList">
                            <button class=" btnss w-100 rounded-start border border-1 border-dark">Show Catelog</button>
                        </RouterLink>
                        <RouterLink class="w-100" to="/CatelogList">
                        <button class=" btnss w-100 rounded-end border border-1 border-dark">Mark as read</button>
                    </RouterLink>
                    </div>
                </div>
                <div class="icon  position-absolute" style="right: -24px; top: 0px;">
                    <p class="m-0 d-flex justify-content-center align-items-center">{{ noti.time }}</p>
                    <div data-bs-toggle="modal" data-bs-target="#exampleModal"
                        class="btn d-flex justify-content-center align-items-center">
                        <i class="bi bi-three-dots-vertical fs-5"></i>
                    </div>
                </div>
            </div>

        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalToggleLabel2">Notification</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="dlt d-flex btn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"
                            data-bs-dismiss="modal">
                            <div class="i d-flex justify-content-center fs-4"><i class="bi bi-trash3-fill"></i></div>
                            <div class="txt ms-3 text-start">
                                <b>Delete</b>
                                <p class="m-0">Delete this notification</p>
                            </div>
                        </div>
                        <div class="noti d-flex justify-content-between w-100 m-2">
                            <div class="d-flex">
                                <div class="i d-flex justify-content-center fs-4"><i class="bi bi-bell-slash"></i></div>
                                <div class="txt ms-3 text-start">
                                    <b>Turn off</b>
                                    <p class="m-0">Stop receiving notifications like this</p>
                                </div>
                            </div>
                            <div class="form-check form-switch d-flex justify-content-center ">
                                <input style="cursor: pointer;" class="form-check-input" type="checkbox"
                                    id="flexSwitchCheckChecked" checked>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- MODAL -->
        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
            tabindex="-1">
            <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalToggleLabel2">Notification</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <p class="fs-4 fw-semibold">Delete This Notification</p>
                        <div class="d-flex justify-content-evenly">
                            <button class="btn btn-success">Yes</button>
                            <button class="btn btn-danger">No</button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                            data-bs-dismiss="modal">Back</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    components: {},
    computed: {
        notis() {
            return this.$store.getters.getNotis;
        },
    }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
    .btnss {
        font-size: 12px;
        
    }
}
</style>