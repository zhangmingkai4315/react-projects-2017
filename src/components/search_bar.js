// 即便是不需要，也必须引入react,因为转换后仍旧是调用的React.createElement
import React ,{Component} from 'react';

// function component 一般只是简单的render使用，
// 我们可以使用class component来使用更多的交互和状态功能
// function component 也不具有state的状态

// const SearchBar = () => {
//     return <input />;
// };

class SearchBar extends  Component {
    // 当state改变的时候，触发组件的rerender
    constructor(props){
        // 调用父类的构造函数去初始化
        super(props);

        // 初始化state状态，
        this.state = {term : ''};
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event){
        console.log(event.target.value);
        // 修改state必须调用setState来改变state,否则不会触发默认的rerender操作。
        this.setState({
            term:event.target.value
        });
    }
    render(){


        // react 支持事件触发，我们可以定义一个input的onChange去触发当输入变化的时候操作
        return (<div>
                    <input 
                        value = {this.state.term}
                        onChange = {this.onInputChange}
                        placeholder = 'Searching...'
                    />
                    <br/>
                    Your search term is :{this.state.term}
                </div>);
    }
}


export default SearchBar;

