const path = require('path')

// const {
//   sortDependencies,
//   installDependencies,
//   runLintFix,
//   printMessage,
// } = require('./utils')
const pkg = require('./package.json')

// const templateVersion = pkg.version

// const { addTestAnswers } = require('./scenarios')

module.exports = {
  prompts: {
    name: {
      when: 'isNotTest',
      type: 'string',
      required: true,
      message: '请输入项目名称：',
    },
    description: {
      when: 'isNotTest',
      type: 'string',
      required: false,
      message: '请输入项目描述：',
      default: 'VUE项目',
    },
    author: {
      when: 'isNotTest',
      type: 'string',
      message: '请输入作者名字：',
    },
    router: {
      when: 'isNotTest',
      type: 'confirm',
      message: '是否需要路由Router？',
    },
    vuex: {
      when: 'isNotTest',
      type: 'confirm',
      message: '是否需要VUEX？'
    }
  },
  filters: {
    'src/router/**/*': 'router',
    'src/store/**/*': 'vuex',
  },
  complete: function(data, { chalk }) {
    console.log('complate')
    // const green = chalk.green

    // sortDependencies(data, green)

    // const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    // if (data.autoInstall) {
    //   installDependencies(cwd, data.autoInstall, green)
    //     .then(() => {
    //       return runLintFix(cwd, data, green)
    //     })
    //     .then(() => {
    //       printMessage(data, green)
    //     })
    //     .catch(e => {
    //       console.log(chalk.red('Error:'), e)
    //     })
    // } else {
    //   printMessage(data, chalk)
    // }
  },
}