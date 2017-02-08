import React from 'react';
import ReactDom from 'react-dom';
import { SearchBar } from './components';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCpp9P1X0oUSuqftUGAOthcMehWn-dDA2U';

// 使用方法，回调函数包含了查询到的数据

// YTSearch({key:API_KEY,term:"hello"},(data)=>{
//     console.log(data);
// });

const App = ()=>{
    return (<div>
                <SearchBar/>
            </div>
    );
};

ReactDom.render(<App/>,document.getElementById('container'));