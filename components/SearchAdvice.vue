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
