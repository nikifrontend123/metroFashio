<template>
    <div class="w-100 ">
        <div class="desktop">
            <nav class="navbar navbar-expand-lg navbar-white d-md-block d-none">
                <div class="container-fluid">
                    <div class="logo">
                        <p class="ms-5 d-flex justify-content-center align-items-center fs-4 fw-bold">Metro Fashion</p>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav d-flex justify-content-end w-100  me-auto mb-2 mb-lg-0  ">
                            <li class="nav-item d-flex justify-content-center align-items-center">
                                <RouterLink to="/" style="text-decoration: none;">
                                    <a class="nav-link active fs-5 text-dark" aria-current="page" href="#">Dashboard</a>
                                </RouterLink>
                            </li>
                            <li class="nav-item  d-flex justify-content-center align-items-center">
                                <RouterLink to="/CatelogList" style="text-decoration: none;">
                                    <a class="nav-link active fs-5 text-dark" aria-current="page" href="#">Catelog</a>
                                </RouterLink>
                            </li>
                            <li class="nav-item  d-flex justify-content-center align-items-center">
                                <RouterLink to="/Order" style="text-decoration: none;">
                                    <a class="nav-link active fs-5 text-dark" aria-current="page" href="#">Order</a>
                                </RouterLink>
                            </li>
                            <li class="nav-item  d-flex justify-content-center align-items-center">
                                <RouterLink to="/Archived" style="text-decoration: none;">
                                    <a class="nav-link active fs-5 text-dark" aria-current="page" href="#">Archived</a>
                                </RouterLink>
                            </li>
                            <li class="nav-item  d-flex justify-content-center align-items-center">
                                <RouterLink to="/Members" style="text-decoration: none;">
                                    <a class="nav-link active fs-5 text-dark" aria-current="page" href="">Members</a>
                                </RouterLink>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle fs-5 text-dark" href="#" id="navbarDropdown"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Create
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <RouterLink to="/NewCatelog" style="text-decoration: none;">
                                        <li><a class="dropdown-item" href="#">New Catelog</a></li>
                                    </RouterLink>
                                    <RouterLink to="/NewMember" style="text-decoration: none;">
                                        <li><a class="dropdown-item" href="#">New Member</a></li>
                                    </RouterLink>
                                    <RouterLink to="/NewOrder" style="text-decoration: none;">
                                        <li><a class="dropdown-item" href="#">New Order</a></li>
                                    </RouterLink>
                                </ul>
                            </li>

                        </ul>
                        <div class="d-flex justify-content-center align-items-center">
                            <RouterLink to="/Notification">
                                <button class="btn position-relative  fs-4">
                                    <i class="bi bi-bell-fill text-danger"></i>
                                </button>
                            </RouterLink>
                            <button class="btn  fs-4">
                                <i class="bi bi-person-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <!-- -------------------------------------------------------------------------------------------------------------------------------- -->
        <div class="mobile topNav">
            <nav class="navbar navbar-white d-md-none d-block">
                <div class="container-fluid">
                    <div class="logo">
                        <p class="ms-2 d-flex justify-content-center align-items-center fs-4 fw-bold">Metro Fashion</p>
                    </div>
                    <div class="offcanvas-header  d-flex justify-content-between align-items-center">
                        <button class="btn  fs-4"><i class="bi bi-bell-fill  text-danger"></i></button>
                        <button class="btn fs-4"><i class="bi bi-person-circle text-dark"></i></button>
                    </div>
                </div>
            </nav>
        </div>

        <div id="mobile bottomNav">
            <div class="bnav d-md-none d-block h-100">
                <div class="bottom-nav w-100 position-fixed " style="bottom: 0;">
                    <!-- <div class="icons d-flex justify-content-between ">
                        <div class="icon text-center text-white ">
                            <RouterLink to="/CatelogList" class="text-white" style="text-decoration: none;">
                                <i class="bi bi-file-earmark-fill fs-4"></i>
                                <p>Catelog</p>
                            </RouterLink>
                        </div>
                        <div class="icon text-center text-white ">
                            <RouterLink to="/Members" class="text-white" style="text-decoration: none;">
                                <i class="bi bi-people-fill fs-4"></i>
                                <p>Member</p>
                            </RouterLink>
                        </div>
                        <div class="icon text-center text-white ">
                            <RouterLink to="/" class="text-white" style="text-decoration: none;">
                                <i class="bi bi-plus-lg fs-4"></i>
                                <p>Dashboard</p>
                            </RouterLink>
                        </div>
                        <div class="icon text-center text-white ">
                            <i class="bi bi-person-fill fs-4"></i>
                            <p>Order</p>
                        </div>
                        <div class="icon text-center text-white ">
                            <i class="bi bi-person-fill fs-4"></i>
                            <p>Profile</p>
                        </div>

                    </div> -->
                    <div class="bottom-nav w-100 position-absolute" style="height: 5%;">
                        <Transition name="slide-fade">
                            <div v-if="!isActive" class="btn-front position-absolute d-flex justify-content-evenly w-100 "
                                style="bottom:0; width: 100%; background-color: #f2f2f2; ">
                                <div class="d-grid">
                                    <RouterLink to="/" class="text-dark text-center" style="text-decoration: none;">
                                        <i class="bi bi-microsoft fs-4"></i>
                                        <p style="font-size: 14px;">Dashboard</p>
                                    </RouterLink>
                                </div>
                                <div class="d-grid">
                                    <RouterLink to="/CatelogList" class="text-dark text-center"
                                        style="text-decoration: none;">
                                        <i class="bi bi-bookmarks-fill fs-4"></i>
                                        <p style="font-size: 14px;">Catelog</p>
                                    </RouterLink>
                                </div>
                                <div class="d-grid">
                                    <div style="display: flex; justify-content:center; align-items:center"
                                        @click="isActive = !isActive" class="btn-icon"><i
                                            class="bi bi-arrow-up-circle fs-4"></i>
                                    </div>
                                    <p style="display: flex; justify-content:center; align-items:center; font-size: 14px;">
                                        Action</p>

                                </div>
                                <div class="d-grid">
                                    <RouterLink to="/Order" class="text-dark text-center" style="text-decoration: none;">
                                        <i class="bi bi-clipboard2-check-fill fs-4"></i>
                                        <p style="font-size: 14px;">Order</p>
                                    </RouterLink>
                                </div>
                                <div class="d-grid">
                                    <RouterLink to="/Members" class="text-dark text-center" style="text-decoration: none;">
                                        <i class="bi bi-people-fill fs-4"></i>
                                        <p style="font-size: 14px;">Members</p>
                                    </RouterLink>
                                </div>
                            </div>
                            <div v-else class="btn-back position-absolute d-flex justify-content-evenly w-100 bg-light "
                                style="width: 100%; bottom: 0; ">
                                <div class="d-grid">
                                    <RouterLink to="/NewCatelog" class="text-dark text-center"
                                        style="text-decoration: none;">
                                        <i class="bi bi-plus-square-fill fs-4"></i>
                                        <p style="font-size: 14px;">Catelog</p>
                                    </RouterLink>
                                </div>
                                <div class="d-grid">
                                    <RouterLink to="/NewMember" class="text-dark text-center"
                                        style="text-decoration: none;">
                                        <i class="bi bi-plus-square-fill fs-4"></i>
                                        <p style="font-size: 14px;">Member</p>
                                    </RouterLink>
                                </div>
                                <div class="d-grid">
                                    <div style="display: flex; justify-content: center;align-items: center;"
                                        @click="isActive = !isActive" class="btn-icon"><i class="bi bi-x-circle fs-4"></i>
                                    </div>
                                    <p style="font-size: 14px;">Close</p>

                                </div>
                                <div class="d-grid">
                                    <RouterLink to="/NewOrder" class="text-dark text-center" style="text-decoration: none;">
                                        <i class="bi bi-plus-square-fill fs-4"></i>
                                        <p style="font-size: 14px;">Order</p>
                                    </RouterLink>
                                </div>
                                <div class="d-grid">
                                    <RouterLink to="/Archived" class="text-dark text-center" style="text-decoration: none;">
                                        <i class="bi bi-archive-fill fs-4"></i>
                                        <p style="font-size: 14px;">Archived</p>
                                    </RouterLink>
                                </div>

                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="Fab-Button">
            <FabButton></FabButton>
        </div> -->
    </div>
</template>
  
<script>
import FabButton from './FabButton.vue';

export default {
    components: {
        FabButton
    },
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        toggle() {
            this.isActive = !this.enable;
        },
    },

}
</script>
  
<style  scoped>
.mobile .navbar-toggler {
    padding: 9px;
    font-size: 12px;
}
</style>