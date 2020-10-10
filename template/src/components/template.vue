<template>
  <div class="wrapper">
    <h2>{{msg}} {{name}}!</h2>
  </div>
</template>
<script>
export default {
  components: {
    
  },
  props: {
    name: {
      type: String,
      require: true,
    }
  },
  data() {
    return  {
      msg: 'hello!'
    }
  },
  mounted() {
    console.log('奥利给')
  },
  computed: {

  },
  watch: {

  },
  methods: {
    
  }
}
</script>
<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: auto;
  background: #fff;
  h2 {
    width: 100%;
    height: auto;
    margin-top: 40%;
    text-align: center;
  }
}
</style>
