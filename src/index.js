// 使用import 导入我们需要的react库
import React from 'react';
// react-dom从原来的react库中分离出来，用来render到dom中
import ReactDom from 'react-dom';
// 创建一个简单的组件，这个组件只是简单的创建一个html实体
// const ：代表了一个不可变的定义量
const App = ()=>{
    // 返回的是html，但是这里是jsx，webpack和babel将其转换为标准的javascript代码
    // 最终被转化为html实体，render到dom中。
    return <div>This is React App</div>;

};

// 我们可以在babeljs网站上将其转化为原生的javascript

// http://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-2&targets=&browsers=&builtIns=false&experimental=false&loose=false&spec=false&code=const%20App%20%3D%20function()%7B%0A%20%20%20%20%2F%2F%20%E8%BF%94%E5%9B%9E%E7%9A%84%E6%98%AFhtml%EF%BC%8C%E4%BD%86%E6%98%AF%E8%BF%99%E9%87%8C%E6%98%AFjsx%EF%BC%8Cwebpack%E5%92%8Cbabel%E5%B0%86%E5%85%B6%E8%BD%AC%E6%8D%A2%E4%B8%BA%E6%A0%87%E5%87%86%E7%9A%84javascript%E4%BB%A3%E7%A0%81%0A%20%20%20%20%2F%2F%20%E6%9C%80%E7%BB%88%E8%A2%AB%E8%BD%AC%E5%8C%96%E4%B8%BAhtml%E5%AE%9E%E4%BD%93%EF%BC%8Crender%E5%88%B0dom%E4%B8%AD%E3%80%82%0A%20%20%20%20return%20%3Cdiv%3EThis%20is%20React%20App%3C%2Fdiv%3E%3B%0A%0A%7D%3B
// "use strict";

// var App = function App() {
//     return React.createElement(
//         "div",
//         null,
//         "This is React App"
//     );
// };

// 将生成的实体添加到html DOM中

// 以下是一个错误的render方式，因为App本身是组件类，而不是组件实例
// ReactDom.render(App);


// <App/> === React.createElement(App, null);
// ReactDom.render(<App/>);

// 错误：
// Uncaught Error: _registerComponent(...): Target container is not a DOM element.
// 原因是我们并没有设置render的dom目标
ReactDom.render(<App/>,document.getElementById('container'));