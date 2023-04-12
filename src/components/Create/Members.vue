<template>
    <div class="h-75">
        <div class="first w-100 ">
            <div class="box w-100 shadow p-2 d-block d-md-flex justify-content-center ">
                <TextInputs class="w-100 " name="Search By Name" type="text" design="floating" />
                <div class="form-floating w-100 ">
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Choose User Role</option>
                        <option value="1">User</option>
                        <option value="2">Admin</option>
                        <option value="3">Creator</option>
                        <option value="4">Manager</option>
                        <option value="5">Assignee</option>
                    </select>
                    <label for="floatingSelect">Works with selects</label>
                </div>
                <div class="form-floating w-100 ">
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Sort Order By</option>
                        <option value="1">Name (A to Z)</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Works with selects</label>
                </div>
                <div class="btnsar d-flex justify-content-center align-items-center mx-2">
                    <button class="btn btn-primary w-100 m-1">Active Users</button>
                    <button class="btn btn-light w-100 m-1">Rest Feilds</button>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center" style="padding-bottom: 80px;">
        <div class="sec d-block d-md-grid  justify-content-evenly mt-3 "
            style="width: 80; grid-template-columns: 1fr 1fr 1fr 1fr;">
            <div v-for="user in users" class=" w-100 box bg-white shadow p-2 border " style="width: 400px;">
                <div class="top d-flex  ">
                    <div class="left me-2">
                        <img style="width: 100px; height: 100px;" :src="user.imgu" alt="">
                    </div>
                    <div class="right">
                        <p class="m-0 fs-5">{{ user.name }}</p>
                        <p class="m-0">Role: {{ user.role }}</p>
                        <p class="m-0">Status: {{ user.status }}</p>
                    </div>
                </div>
                <div class="bottom mt-3 d-flex">
                    <div class="btn-3 d-flex w-100">
                        <button style="font-size: 13px;" class="btn btn-light w-100 border"><i class="bi bi-telephone "></i>
                            Make a Call</button>
                        <button style="font-size: 13px;" class="btn btn-light w-100 border"><i class="bi bi-whatsapp "></i>
                            Send message</button>
                        <RouterLink class="w-100  d-flex justify-content-center" style="text-decoration: none;" to="/CreateMember">
                            <button style="font-size: 13px;" class="btn btn-warning w-100 border"><i
                                    class="bi bi-shield-check "></i> Edit</button>
                        </RouterLink>
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
        users() {
            return this.$store.getters.getUsers;
        }
    },
    
}
</script>

<style  scoped>
@media only screen and (max-width: 600px) {
   .btnsar{
        margin-top: 10px;
    }
   .form-floating{
        margin-top: 10px;
    }
}
</style>