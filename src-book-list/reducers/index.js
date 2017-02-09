import {combineReducers} from 'redux';
import BooksReducer from './reducer_books';

import ActiveBook from './reducer_active_books';


const rootReducer = combineReducers({
    books:BooksReducer,
    // 对象应该是一个可执行的函数，并且如果包含状态改变的话，需要通过action传递到函数中并利用switch来比较执行。
    activeBook:ActiveBook
});

export default rootReducer;