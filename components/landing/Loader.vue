<template>
  <div class="load-wrapp landing-loader" v-if="loading" >
		  <div class="wrap">
			  <ul class="dots-box">
			    <li class="dot"><span></span></li>
			    <li class="dot"><span></span></li>
			    <li class="dot"><span></span></li>
			    <li class="dot"><span></span></li>
			    <li class="dot"><span></span></li>
			  </ul>
		  </div>
  </div>
</template>

<script>
  export default {
    props: {
       loading: {
        type: Boolean
      },
    },

    data(){
      return {
      }
    }
  }
</script>
