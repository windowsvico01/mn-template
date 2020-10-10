<template>
  <div id="app">
    {{#router}}
    <router-view />
    {{else}}
    <m-template></m-template>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import mTemplate from '@/components/goApp';
{{/unless}}

export default {
  name: 'App',
  data() {
    
  },
  components: {
    {{#router}}
    {{esle}}
    mTemplate
    {{/router}}
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss">
#app {
  min-height: 100%;
}
</style>