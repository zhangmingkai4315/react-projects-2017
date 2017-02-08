import React,{Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render(){
        let title ='';
        let pages ='';
        if(this.props.book){
            title = this.props.book.title;
            pages = this.props.book.pages;
        }
        return (
            <div>
                <h3>{title}</h3>
                <h5>{pages}</h5>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        book:state.activeBook
    };
}


export default connect(mapStateToProps)(BookDetail);