import React, {Component} from 'react';
// connect 用来桥接react和redux.将redux的状态传递到react中
import { connect } from 'react-redux';
// 自己创建的action
import {selectBook} from '../actions';
import {bindActionCreators} from 'redux';


class BookList extends Component {
    constructor(props){
        super(props);
        this.renderList = this.renderList.bind(this);
    }
    renderList(){
        return this.props.books.map(book=>{
            return (
                <li className="list-group-item" 
                    key={book.title}
                    onClick = {()=>this.props.selectBook(book)} 
                >{book.title}</li>
            );
        });
    }
    render(){
        return (
            <ul className="list-group col-md-4">
                {this.renderList()}
            </ul>
        );
    }
}

// 从应用的状态数据中提取我们需要的数据,并传递到我们的props中
// 当状态发生变化的时候，我们的组件也会立即被触发更新操作。

function mapStateToProps(state){
    return {
        books:state.books
    };
}
// 将我们的事件处理函数传递到容器中
function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook:selectBook},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);