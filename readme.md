##### npm i snabbdom@0.7.4
---
##### 中文文档
https://github.com/coconilu/Blog/issues/152
---
### 核心流程
- 使用`h()`创建JS对象vnode描述真实DOM
- `init()`加载模块，创建`patch()`
- `patch()`比较新旧2个vnode
- 把变化的内容更新到真实DOM树