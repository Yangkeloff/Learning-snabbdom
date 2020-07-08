import { h, init } from 'snabbdom'

const app = document.querySelector('#app')

// patch(oldVnode, newVnode) 
// init返回的patch函数有两个参数。第一个是表示当前视图的DOM元素或vnode。第二个是表示更新后的新视图的vnode
const patch = init([])

// snabbdom/h创建虚拟节点（vnodes）。h函数接收一个字符串形式的标签/选择器、一个可选的数据对象、一个可选的字符串或数组作为子代
let vnode = h('div', [
  h('h1', 'hello snabbdom'),
  h('p', 'content p')
])
let oldVnode = patch(app, vnode)

setTimeout(() => {
  vnode = h('div', [
    h('h1', 'hello snabbdom 233333'),
    h('p', '5s后清空dom')
  ])
  oldVnode = patch(oldVnode, vnode)
}, 2333)

setTimeout(() => {
  oldVnode = patch(oldVnode, h('!'))  // vnode = '!' 生成一个注释节点
}, 5000)