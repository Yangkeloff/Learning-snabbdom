import { h, init } from 'snabbdom' 
import style from 'snabbdom/modules/style'
import eventlisteners from 'snabbdom/modules/eventlisteners'

const app = document.querySelector('#app')

// 注册模块
const patch = init([
  style,
  eventlisteners
])

// h('a', {attrs: {href: '/foo'}}, 'Go to Foo')
let vnode = h('div', {
  style: {
    backgroundColor: 'green',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center'
  },
  on: {
    click: alertHello
  },
}, [
  h('h1', 'click me')
])

function alertHello() {
  alert('Hello modules')
}

patch(app, vnode)
