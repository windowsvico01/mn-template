<template>
  <div id="app">
    {{#plugins.router}}
    <router-view />
    {{else}}
    <m-template></m-template>
    {{/plugins.router}}
  </div>
</template>

<script>
{{#unless plugins.router}}
import mTemplate from '@/components/template';
{{/unless}}

export default {
  name: 'App',
  data() {
    return {
      msg: 'hello'
    }
  },
  components: {
    {{#plugins.router}}
    {{else}}
    mTemplate
    {{/plugins.router}}
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