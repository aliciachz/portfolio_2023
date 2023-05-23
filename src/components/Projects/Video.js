import React from 'react';

function Video({ videoSrc }) {
  return (
    <video className='mouse-lg'
      controls
      width="100%"
      height="auto"
      autoPlay
      loop
      muted
      style={{ padding: '50px' }}
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}

export default Video;
