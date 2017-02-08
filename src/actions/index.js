function selectBook (book){
    // 必须返回一个对象，包含一个type对象
    return {
        type:'BOOK_SELECTED',
        payload:book
    };
}

export {selectBook};