import React from 'react';
import VideoListItem from './video_list_item';
// function component 可以包含传递到组件的props，通过props来render数据到视图。
const VideoList = (props)=>{
    // const onVideoSelect = props.onVideoSelect;
    const videoListItems = props.videos.map(video=>{
        // 当我们render一些列表数据的时候，需要增加一个key到列表项中，用来更新数据，类似于数据库中的id，用来定位数据
        // 而不用需要更新的时候，找不到元素,这里我们使用video本身的etag来作为id使用
        return <VideoListItem 
                video={video} 
                key={video.etag} 
                onVideoSelect = {props.onVideoSelect}
                />
    });
    return (
        <ul className="col-md-4 list-group">
            {videoListItems}
        </ul>
    );
};

export default VideoList;
