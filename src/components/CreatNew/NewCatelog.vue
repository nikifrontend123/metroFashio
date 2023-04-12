<template>
    <div class="catelog">
      
      <section class="py-4" style="padding-bottom: 5em;">
           <div class="container">
            <div class="row">
                <div class="col-8 col-md-6 col-lg-6 py-2 m-auto"><div class="float-start"><span><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="40" height="40" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M60 30H8.83l8.58-8.59a2 2 0 0 0-2.82-2.82l-12 12a2.06 2.06 0 0 0-.59 1.8 2.16 2.16 0 0 0 .55 1l12 12a2 2 0 1 0 2.82-2.82L8.83 34H60a2 2 0 0 0 0-4z" data-name="Layer 27" fill="#000000" data-original="#000000" class=""></path></g></svg></span><span class="ps-2"><b>Create New Catelog</b></span></div></div>
                <div class="col-4 col-md-6 col-lg-6 m-auto"><div class="float-end"><span><a name="" id="" class="btn btn-primary" href="#" role="button"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="20" height="20" x="0" y="0" viewBox="0 0 35 35" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M17.5 22.131a1.249 1.249 0 0 1-1.25-1.25V2.187a1.25 1.25 0 0 1 2.5 0v18.694a1.25 1.25 0 0 1-1.25 1.25z" fill="#ffffff" data-original="#ffffff" class=""></path><path d="M17.5 22.693a3.189 3.189 0 0 1-2.262-.936l-6.751-6.751a1.249 1.249 0 0 1 1.767-1.767l6.751 6.751a.7.7 0 0 0 .99 0l6.751-6.751a1.25 1.25 0 0 1 1.768 1.767l-6.752 6.751a3.191 3.191 0 0 1-2.262.936z" fill="#ffffff" data-original="#ffffff" class=""></path><path d="M31.436 34.063H3.564A3.318 3.318 0 0 1 .25 30.749v-8.738a1.25 1.25 0 0 1 2.5 0v8.738a.815.815 0 0 0 .814.814h27.872a.815.815 0 0 0 .814-.814v-8.738a1.25 1.25 0 1 1 2.5 0v8.738a3.318 3.318 0 0 1-3.314 3.314z" fill="#ffffff" data-original="#ffffff" class=""></path></g></svg><span class="ps-2">Import</span></a></span></div></div>
            </div>
            <form action="" method="post" style="text-align: left;">
                    <div class="row">
                        <div class="col-md-12 col-lg-12 mb-3">
                          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Catelog Name" required>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-3">
                          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Artic No." required>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-3">
                          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Sale Price" required>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-3">
                          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Panna(inch)" required>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-3">
                          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Fabric Name" required>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-3">
                          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Fc/unit" required>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-3">
                          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Unit" required>
                        </div>
                        <div class="col-md-12 col-lg-12 mb-3">
                          <textarea class="form-control" placeholder="" name="" id="" rows="3" required>Search Tags</textarea>
                          <small id="helpId" class="form-text text-muted">Help text</small>
                        </div>
                        <div class="col-md-12 col-lg-12 mb-3">
                          <textarea class="form-control" placeholder="" name="" id="" rows="3" required>Note for reference</textarea>
                          <small id="helpId" class="form-text text-muted">Help text</small>
                        </div>
                        <div class="col-md-12 col-lg-12 mb-3">
                          <textarea class="form-control" placeholder="" name="" id="" rows="3" required>Instructions for fabricator</textarea>
                          <small id="helpId" class="form-text text-muted">Help text</small>
                        </div>
                        <div class="col-md-12 col-lg-12 mb-3">
                            <select class="form-select form-select-lg" name="" id="" required>
                                <option selected>Select Defauit Assignee</option>
                                <option value="">One</option>
                                <option value="">Two</option>
                                <option value="">Three</option>
                            </select>
                        </div>
                        <div class="col-md-12 col-lg-12 mb-3">
                            <select class="form-select form-select-lg" name="" id="" required>
                                <option selected>Narender</option>
                                <option value="">One</option>
                                <option value="">Two</option>
                                <option value="">Three</option>
                            </select>
                        </div>
                        <div class="col-md-12 col-lg-12 mb-3">
                        <div class="form-check">
                          <label for="">Toggle Catelog Assess</label>
                          <input class="form-check-input" type="checkbox" value="" id="" required>
                          <label class="form-check-label" for="">Access Blocked</label>
                        </div>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-3">
                          <label for="" class="form-label">Upload Image</label>
                          <input type="file" class="form-control" name="" id="" placeholder="" aria-describedby="fileHelpId" required>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-3">
                          <label for="" class="form-label">Upload PDF</label>
                          <input type="file" class="form-control" name="" id="" placeholder="" aria-describedby="fileHelpId" required>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-3">
                            <div><a name="" id="" class="btn btn-outline-primary w-100" href="#" role="button">Reset Felids</a></div>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-3">
                            <div><a name="" id="" class="btn btn-primary w-100" href="#" role="button">Save Details</a></div>
                        </div>
                    </div>
                </form>
           </div>
        </section>
      
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>