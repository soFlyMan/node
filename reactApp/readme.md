# react learning

### components lifecycle
**初始化阶段**

getDefaultProps:获取实例的默认属性(即使没有生成实例，组件的第一个实例被初始化CreateClass的时候调用，只调用一次,)

　　getInitialState:获取每个实例的初始化状态（每个实例自己维护）

　　componentWillMount：组件即将被装载、渲染到页面上（render之前最好一次修改状态的机会）

　　render:组件在这里生成虚拟的DOM节点（只能访问this.props和this.state；只有一个顶层组件，也就是说render返回值值职能是一个组件；不允许修改状态和DOM输出）

　　componentDidMount:组件真正在被装载之后，可以修改DOM

**运行中状态**

getDefaultProps:获取实例的默认属性(即使没有生成实例，组件的第一个实例被初始化CreateClass的时候调用，只调用一次,)

　　getInitialState:获取每个实例的初始化状态（每个实例自己维护）

　　componentWillMount：组件即将被装载、渲染到页面上（render之前最好一次修改状态的机会）

　　render:组件在这里生成虚拟的DOM节点（只能访问this.props和this.state；只有一个顶层组件，也就是说render返回值值职能是一个组件；不允许修改状态和DOM输出）

　　componentDidMount:组件真正在被装载之后，可以修改DOM

- mount
hook函数
- update
- unmount

**销毁阶段**

　componentWillUnmount:开发者需要来销毁（组件真正删除之前调用，比如计时器和事件监听器）

**props state差异对比**

props是一个父组件传递给子组件的数据流，放初始化数据一般都是不变的 结构上是调用者的parent

state代表的是一个组件内部自身的状态（可以是父组件、子孙组件）。就是放要变的。

**修改state的值**

调用setState()方法
```
componentDidMount:function(){  //实例方法，this指向父级的Hello
        alert('did');
        var _self=this;
        window.setTimeout(function(){
           _self.setState({
           opacity:0.5,
           fontSize:30
           })

        },2000)
```
（要用_self保存components的this，因为this指的是调用这个函数的对象。函数参数并不奴
隶属于哪个对象，所有它的this指向window.还有一种，this指向apply,call,bind的第一个参数对象。）
bind(ES5) 所以也可以写成
```
componentDidMount:function(){
    window.setTimeout(function(){
        this.setState({
            opacity:0.5,
            fontSize:30
            }.bind(this),2000)
        })
}
```

