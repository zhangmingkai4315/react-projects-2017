// 这里的state不是整个状态树，而是针对这个reducer的部分状态
// 我们使用了es6的默认参数
export default function(state=null,action){
    switch(action.type){
    case 'BOOK_SELECTED':
        return action.payload;
    default:
        return state;
    }
}