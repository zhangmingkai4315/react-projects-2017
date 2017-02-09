import React,{Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchWeather} from '../actions';



class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term:''
        };
        // 确保传递的this是class scope范围
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitSearch = this.onSubmitSearch.bind(this);
    }
    onInputChange(e){
        this.setState({term:e.target.value});
    }
    onSubmitSearch(e){
        e.preventDefault();
        if(this.state.term){
            this.props.fetchWeather(this.state.term);
        }
        this.setState({term:''});
    }
    render(){
        return (
            <form onSubmit={this.onSubmitSearch} className="input-group">
                    <input  value={this.state.term}
                            onChange={this.onInputChange}
                            type="text" 
                            className="form-control" 
                            placeholder="输入您想搜索的城市..."/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </span>         
            </form>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);