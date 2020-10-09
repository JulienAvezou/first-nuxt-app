<template>
  <div>
    <h2>Welcome to my advice generator</h2>
    <button @click="randomAdvice" class="btn-advice">Click me</button>
    <Advice :id="randomadvice.id" :advice="randomadvice.advice"/>
  </div>
</template>

<script>
import axios from "axios";
import Advice from '../components/Advice';
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
  components: {
    Advice
  },
  data () {
    return {
      randomadvice: {}
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
      this.randomadvice = res.data.slip;  
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
          this.randomadvice = res.data.slip;   
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
  width: 15%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background: red;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: width .2s ease;
}

.btn-advice:hover {
  width: 15.1%;
  background: orange;
  transition: width .2s ease; 
}

.btn-advice:focus {
  outline: none;
  box-shadow: none;
}
</style>