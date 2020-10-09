<template>
  <div>
    <h2>Welcome to my advice generator</h2>
    <button @click="randomAdvice" class="btn-advice">Click me</button>
    <p>{{ randadvice }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
   head () {
    return {
      title: "Welcome to Advice Generator",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place to seek advice"
        }
      ]
    };
  },
  data () {
    return {
      randadvice: {}
    }   
  },
  async created() {
    const config = {
      headers: {
        'Accept': 'application/json'
      }
    }

    try {
      const res = await axios.get('https://api.adviceslip.com/advice', config);
      this.randadvice = res.data.slip.advice;
    } catch (err) {
        console.log(err)
    }
  },
  methods: {
    async randomAdvice () {
      const config = {
          headers: {
            'Accept': 'application/json'
          }
        }

        try {
          const res = await axios.get("https://api.adviceslip.com/advice", config);
          this.randadvice = res.data.slip.advice;       
        } 
        catch (err) {
          console.log(err)
        }
    }
  },
}
</script>

<style scoped>
.btn-advice {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background: red;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}
</style>