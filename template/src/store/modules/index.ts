import camelCase from 'lodash/camelCase'
const requireModule = require.context('.', false, /\.ts$/)
const modules = {}
requireModule.keys().forEach(fileName => {
 // Don't register this file as a Vuex module
 if (fileName === './index.ts') return
 
 const moduleName = camelCase(
  fileName.replace(/(\.\/|\.ts)/g, '')
 )
 modules[moduleName] = {
        namespaced: true,
        ...requireModule(fileName).default,
       }
})
export default modules