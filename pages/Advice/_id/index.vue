<template>
  <div>
    <nuxt-link to= '/advice'>Back</nuxt-link>
    <h6> {{ advice }} </h6>  
  </div>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      advice: {}
    }   
  },
  async created () {
    const config = {
      headers: {
        'Accept': 'application/json'
      }
    }

    try {
      const res = await axios.get(`https://api.adviceslip.com/advice/${this.$route.params.id}`, config);    
      this.advice = res.data;   
  
    } catch (err) {
      console.log(err)
    }
  } 
};
</script>
