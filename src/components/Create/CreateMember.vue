<template>
    <div class=" w-100 h-100 ">

        <div class="main container d-block w-100  d-md-flex ">
            <div class="left ">
                <div class="img d-flex justify-content-center" >
                    <Avatar></Avatar>
                </div>
                <div class="txt m-3">
                    <p class="m-0 fs-3 " style="font-weight: 400;">Kedar</p>
                    <p class="m-0 ">Role: CREATOR</p>
                    <p class="m-0">Status: ACCESS GRANTED</p>
                </div>
                <div class="box p-2 ">
                    <div class="min-box border p-2">
                        <p class="m-0">Toggle Member Access</p>
                        <div class="form-check form-switch mt-2">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                            <label class="form-check-label" for="flexSwitchCheckChecked">Access Granted</label>
                        </div>
                    </div>
                    <div class="min-box border p-2 mt-3">
                        <p class="m-0">Select Member Role</p>
                        <select style=" font-weight: 700;" class="form-select form-select-sm"
                            aria-label=".form-select-sm example">
                            <option selected>No Role Selected</option>
                            <option value="1">User</option>
                            <option value="2">Admin</option>
                            <option value="3">Creator</option>
                            <option value="4">Manager</option>
                            <option value="5">Assignee</option>
                        </select>
                    </div>
                    <div class="Update-btn w-100 mt-2">
                        <RouterLink to="/Members">
                            <button class="btn btn-warning w-100">Update Access Control</button>
                        </RouterLink>
                    </div>
                </div>
            </div>
            <div class="right w-100 px-2"  >
            <div class=" " >
                <form @submit="update" method="post">
                    <TextInputs name="Assignee Code" type="text" design="floating" v-model="form.Code" />
                    <TextInputs name="Full Name" type="text" design="floating" v-model="form.Name" />
                    <TextInputs name="Mobile" type="number" design="floating" v-model="form.Number" />
                    <TextInputs name="Email Id" type="email" design="floating" v-model="form.Email" />
                    <TextInputs name="Password" type="password" design="floating" v-model="form.Password" />
                    <TextInputs name="Confirm Password" type="password" design="floating" v-model="form.ConfirmPassword" />
                    <!-- <div class="mb-3 border rounded p-2">
                        <label for="formFile" class="form-label">Upload Profile Photo</label>
                        <input class="form-control" type="file" id="formFile">
                    </div> -->
                    <div class="buttons d-flex mt-2">
                        <div type="Reset" class="btn btn-light w-100 border">Reset Fields</div>
                        <input @click="getData()" name="Get Data" type="submit" class="btn btn-light w-100 border"
                            value="Update Details" />
                    </div>
                </form>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Avatar from '../Avatarinput/Avatar.vue';
import TextInputs from '../InputsType/TextInputs.vue';
export default {
    components: {
    TextInputs,
    Avatar
},
    data() {
        return {
            form: {
                Code: "",
                Name: "",
                Number: "",
                Email: "",
                Password: "",
                ConfirmPassword: "",
            },
            // error: [],
        };
    },
    methods: {
        // update() {
        //     this.error = [];
        //     for (const item in this.form) {
        //         if (this.form[item] === "" || this.form[item].length === 0) {
        //             this.error.push(item);
        //         }
        //     }
        //     if (this.error.length === 0) {
        //         alert("Data has been submitted");
        //     }
        //     console.warn(this.error);
        // },
        
        getData() {
            console.warn("values :  ", this.form.Code, this.form.Name, this.form.Number, this.form.Email, this.form.Password, this.form.ConfirmPassword);
            // console.warn(this.form)
        }
    }

}
</script>

<style  scoped>
@media only screen and (max-width: 600px) {
    .right{
    position: relative;
    z-index: -1;
    padding-bottom: 80px;
    
}
}


</style>