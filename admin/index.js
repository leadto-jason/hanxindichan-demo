import './index.scss'
import Vue from './lib/vue.esm'

// 页面名数组
let htmlNameArr = require
  .context('../src/views', true, /\.ejs$/)
  .keys()
  .map(path => {
    return path
    // 统一正反斜杠
      .replace(/\\/g, '/')
      // 去除开头
      .replace('./', '')
      // 去除结尾
      .replace('/index.ejs', '') + '.html'
  })

// 组件 render 数组
let compContexts = require.context('../src/components', true, /\.ejs$/)
let compArr = compContexts
  .keys()
  .map(path => {
    let dirname = path.replace(/\\/g, '/').replace('./', '').replace('/index.ejs', '')
    return {
      dirname,
      render: compContexts(path)
    }
  })

new Vue({
  el: '.root',
  data () {
    return {
      htmlNameArr,
      compArr
    }
  }
})
