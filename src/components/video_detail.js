import React from 'react';

const VideoDetail = ({video})=>{
    if(!video){
        return (<div></div>);
    }
    const videoId = video.id.videoId;

    //使用es6的嵌入式模板
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className ="embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-item" src={videoUrl}></iframe>
            </div>
            <div className = "defails">
                <div>
                    <h3>{video.snippet.title}</h3>
                </div>
                <div>
                    {video.snippet.description}
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;