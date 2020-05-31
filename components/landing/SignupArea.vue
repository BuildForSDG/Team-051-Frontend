<template>
    <section class="welcome-page register-page sec-padding pb-150px p-relative o-hidden bg-gray h-auto">
		  <div class="container">
			  <div class="row welcome-text sec-padding flex-center">
				  <div class="col-md-6 mb-50px">
					  <img alt="img" src="~assets/landing/images/yu.png" class="ml-auto mr-auto">
				  </div>
				  <div class="col-md-6">
					  <h1>Sign Up</h1>

					  <h6 class="fw-400 mt-20px mb-10px color-666"></h6>

					  <a href="#0" class="d-inline-block social social-btn p-relative mr-10px
            mb-10px pl-30px pr-30px pt-10px pb-10px radius-5px color-fff
            color-fff-hvr facebook">
              <i class="fa fa-facebook p-absolute"></i>
              <span class="pl-20px">Easy signup with your facebook account</span>
            </a>

					  <h5 class="fw-400 mt-10px separator p-relative text-center">
						  <span class="bg-gray p-relative p-15px z-index-1">Or</span>
					  </h5>

            <signup-form></signup-form>

					  <nuxt-link to="/guest/login" class="d-inline-block mt-20px">
              Already registered? Sign in
            </nuxt-link>

				  </div>
			  </div>
		  </div>
		  <div class="pattern p-absolute">
		  </div>
	  </section>
</template>

<script>
  import SignupForm from '@/components/landing/forms/SignupForm.vue';

  export default {

    components: {
      SignupForm
    },

    data(){
      return {

      }
    }
  }
</script>
