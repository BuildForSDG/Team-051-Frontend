<template>
    <section class="welcome-404 sec-padding pb-150px text-center p-relative o-hidden bg-gray">
		  <div class="container">
			  <div class="row welcome-text sec-padding flex-center">
				  <div class="col-md-12 mb-20px z-index-1">
					  <h1 class="color-blue">404 Error</h1>
				  </div>
				  <div class="col-md-7 text-center">
					  <img alt="img" src="~assets/landing/images/404.png" class="ml-auto mr-auto mb-10px">
					  <h4>Sorry we can't find that page</h4>
					  <p class="mb-30px">The page you are looking for was moved, removed, renamed or might never existed.</p>
					  <form>
						  <input type="text" class="d-block w-100 mb-20px input-field pt-10px pb-10px pr-10px pl-10px radius-5px" required/>
						  <input type="submit" value="search" class="main-btn btn-3"/>
					  </form>
				  </div>
			  </div>
		  </div>
		  <div class="pattern p-absolute">
		  </div>
	  </section>
</template>

<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>
