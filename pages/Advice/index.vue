<template>
  
  <div>
    <h2>Search for Advice</h2>
    <SearchAdvice v-on:search-text="searchText" />       
    <Advice v-for="advice in advices" :key="advice.id" :id="advice.id" :advice="advice.advice" />
  </div>
</template>

<script>
import axios from 'axios';
import Advice from '../../components/Advice';
import SearchAdvice from '../../components/SearchAdvice';

export default {
  components: {
    Advice,
    SearchAdvice
  },
  data() {
    return {
      advices: []
    }
  },
  // uncomment if want to set default list of advice when render page
  // async created() {
  //   const config = {
  //     headers: {
  //       'Accept': 'application/json'
  //     }
  //   }

  //   try {
  //     const res = await axios.get('https://api.adviceslip.com/advice/search/life', config);
  //     this.advices = res.data.slips;

  //   } catch (err) {
  //     console.log(err)
  //   }

  // },
  methods: {
    
    async searchText(text) {
      if (text !== '') { 
        const config = {
          headers: {
            'Accept': 'application/json'
          }
        }

        try {
          const res = await axios.get(`https://api.adviceslip.com/advice/search/${text}`, config);
          this.advices = res.data.slips;        
        } 
        catch (err) {
          console.log(err)
        }
      }
    }
  },
  head() {
    return {
      title: "Random Advice",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place to seek advice"
        }
      ]
    };
  } 
  
}
</script>
