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
      type: 'string',
      required: true,
      message: '请输入项目名称：',
    },
    description: {
      type: 'string',
      required: false,
      message: '请输入项目描述：',
      default: 'VUE项目',
    },
    author: {
      type: 'string',
      message: '请输入作者名字：',
    },
    plugins: {
      type: 'checkbox',
      message: '选择你需要的插件',
      choices: [
        {
            name: "vant",
            checked: true // 默认选中
        },
        // new inquirer.Separator("--- 分隔符 ---"), // 自定义分隔符
        {
            name: "vuex",
        },
        {
            name: "router"
        },
      ]
    }
  },
  filters: {
    'src/router/**/*': 'plugins.router',
    'src/store/**/*': 'plugins.vuex',
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