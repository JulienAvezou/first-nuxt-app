<template>
  <nuxt-link :to= "'advice/' + id">
    <div class="advice">
      <p> {{ advice }} </p>
    </div> 
  </nuxt-link>
</template>

<script>
export default {
  name: 'Advice',
  props: ['advice', 'id']
}
</script>

<style>
.advice {
  padding: 1rem;
  border: 1px dotted #ccc;
  margin: 1rem 0;
}
</style>