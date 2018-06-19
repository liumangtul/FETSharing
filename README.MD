# REDUX
## redux三大原则
-  所有的应用状态（包括UI,数据）都存在一个单一的state(tree)里
   state是应用中的数据的一个最小化的抽象

-  state tree 是只读的。任何变化需要分发一个action
   
   action ：是一个描述变化的普通js对象
   action是数据改变的最小化的抽象
   可以自己设计action对象的结构,但必须要有type

- 纯函数 Pure Function | 非纯函数 Impure Function 
  
  纯函数不会修改传进来的参数，他始终返回新的值
  
  ... ... do something ... ...
