<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="text" placeholder="Type here...">
    <input type="submit" value="Seek Advice">
  </form>  
</template>

<script>
export default {
  name: 'SearchAdvice',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('search-text', this.text);
      this.text='';
    }
  }
}
</script>

<style>
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

input[type=submit] {
  background-color: #914f3a;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 12px 24px;
  text-decoration: none;
  margin: 4px 2px 18px 0px;
  cursor: pointer;
}
</style>