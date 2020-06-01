<template>
   <form id="log-in" class="mt-30px mb-20px">

      <div class="form-group p-relative">
			  <input type="email" placeholder="Your Email" required class="d-block mb-20px">
			  <i class="fa fa-envelope fs-20 color-blue p-absolute"></i>
			</div>

			<div class="form-group p-relative">
				<input type="password" placeholder="Your Password" required class="d-block mb-20px">
			  <i class="fa fa-lock fs-20 color-blue p-absolute"></i>
			</div>

			<button role="button" class="main-btn btn-3 before-gray">Log In</button>
	</form>
</template>

<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>
