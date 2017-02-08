import React from 'react';
// 我们可以使用es6的展开表达式，直接获取video的值，而不用再去props.video获得
// const VideoListItem = (props)=>{
const VideoListItem = ({video,onVideoSelect})=>{
    return (
        <li onClick={()=>onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className = "media-left">
                    <img className = "media-object" src={video.snippet.thumbnails.default.url}/>
                </div>
                <div className = "media-body">
                    <div className = "media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
