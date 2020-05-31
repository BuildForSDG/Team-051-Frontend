<template>
   <section class="welcome-page sec-padding pb-150px p-relative o-hidden bg-gray h-auto">
		  <div class="container">
			  <div class="row welcome-text sec-padding flex-center">
				  <div class="col-md-6 mb-50px">
					  <img alt="img" src="~assets/landing/images/x.png" class="ml-auto mr-auto">
				  </div>
				  <div class="col-md-6">
					  <i class="fa fa-lock fs-50 color-blue mb-10px"></i>
					  <h2>Forget Your Password !</h2>
					  <p>Don't worry ! enter your email and we will send you a rest</p>

            <lost-password-form></lost-password-form>

				  </div>
			  </div>
		  </div>
		  <div class="pattern p-absolute">
		  </div>
	  </section>
</template>

<script>
  import LostPasswordForm from '@/components/landing/forms/LostPasswordForm.vue';

  export default {

    components: {
      LostPasswordForm
    },

    data(){
      return {

      }
    }
  }
</script>

