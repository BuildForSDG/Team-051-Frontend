<template>
  <form id="log-in" class="mt-30px">
		<div class="row">

    <div class="col-md-6">
			<div class="form-group p-relative">
				<input type="text" placeholder="Your Name" required class="d-block w-100">
					<i class="fa fa-user fs-20 color-blue p-absolute"></i>
			</div>
		</div>

		<div class="col-md-6">
			<div class="form-group p-relative">
				<input type="email" placeholder="Your Email" required class="d-block w-100">
					<i class="fa fa-envelope fs-20 color-blue p-absolute"></i>
				</div>
			</div>
		</div>

		<div class="form-group p-relative">
			<input type="password" placeholder="Your Password" required class="d-inline-block w-100">
			<i class="fa fa-lock fs-20 color-blue p-absolute"></i>
		</div>

		<div class="form-group p-relative">
			<input type="password" placeholder="Repeat Your Password" required class="d-inline-block w-100">
			<i class="fa fa-lock fs-20 color-blue p-absolute"></i>
		</div>

		<div class="form-group mb-30px">
			<input type="checkbox" name="ma" value="male" class="w-auto h-auto" required>  you accept our
      <a href="#0">Terms  of Use</a> and our <a href="#0">Privacy Policy</a>.
		</div>

		<button role="button" class="main-btn btn-3 before-gray">Sign Up </button>

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
