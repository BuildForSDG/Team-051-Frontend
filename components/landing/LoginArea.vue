<template>
    <section class="welcome-page sec-padding pb-150px p-relative o-hidden bg-gray h-auto">
		  <div class="container">
			  <div class="row welcome-text sec-padding flex-center">
				  <div class="col-md-6 mb-50px">
					  <img alt="img" src="~assets/landing/images/kl.png" class="ml-auto mr-auto">
				  </div>
				  <div class="col-md-6">
					  <h1>Log in Now</h1>
					  <p class="mb-50px"></p>

            <login-form></login-form>

					  <nuxt-link to="/guest/signup" class="float-left mb-10px">
              Not a member? Sign up
            </nuxt-link>

            <nuxt-link to="/guest/lost-password" class="float-right">
              Forget my password
            </nuxt-link>
				  </div>
			  </div>
		  </div>
		  <div class="pattern p-absolute">
		  </div>
	  </section>
</template>

<script>
  import LoginForm from '@/components/landing/forms/LoginForm.vue';

  export default {

    components: {
      LoginForm
    },

    data(){
      return {

      }
    }
  }
</script>
