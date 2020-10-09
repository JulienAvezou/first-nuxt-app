<template>
  
  <div>
    <h2>Search for Advice</h2>
    <SearchAdvice v-on:search-text="searchText" />    
    <p v-if="typeof advices === 'undefined'">Sorry can't find any advice for your request. Please search again.</p>
    <p v-else-if="advices.length > 0">Advice found for you:</p>
    <p v-else>You can search for advice on this page. Start now...</p>         
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
