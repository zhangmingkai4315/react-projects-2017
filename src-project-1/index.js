import _ from 'lodash';
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import { SearchBar,VideoList,VideoDetail} from './components';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCpp9P1X0oUSuqftUGAOthcMehWn-dDA2U';

// 使用方法，回调函数包含了查询到的数据

// YTSearch({key:API_KEY,term:"hello"},(data)=>{
//     console.log(data);
// });

/*const App = ()=>{
    return (<div>
                <SearchBar/>
            </div>
    );
};*/

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos :[],
            selectedVedio:null
        }; 
        this.videoSearch('reactjs');
    }
    videoSearch(term){
        YTSearch({key:API_KEY,term:term},(videos)=>{
            //当key 与value名称一致的时候 this.setState({videos}); === this.setState({videos:videos});
            this.setState({videos,selectedVedio:videos[0]});
        });
    }
    render(){
        // 我们将该函数改造成为一个可自定义执行间隔的函数。
        const videoSearch = _.debounce((term => {this.videoSearch(term)}),300);
        return (
            <div>
                <SearchBar onSearchTermChange = {term => videoSearch(term)}/>
                {/*我们必须处理当数据为null的时候的情况*/}
                <VideoDetail video = {this.state.selectedVedio}/>
                {/*传递videos到子组件中只需要定义一个名称传递即可，组件通过props属性获得传递数据
                对于事件我们可以传递一个handle函数到子组件，将数据捕获上来
                */}
                <VideoList videos = {this.state.videos} 
                           onVideoSelect={selectedVedio => this.setState({selectedVedio})}
                />
            </div>
        )
    }
}


ReactDom.render(<App/>,document.getElementById('container'));