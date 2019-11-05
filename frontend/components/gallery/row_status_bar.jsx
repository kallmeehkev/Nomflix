import React from 'react';

const StatusBar = ({numVideos, activeRow}) => {
  const bars = [];
  for (let i = 0; i < numVideos / 5; i++) {
    const bar = i === activeRow ? <div className="row_status_bar active"></div> : <div className="row_status_bar"></div>
    bars.push(bar)
  }
  return (
    <span>
      <div></div>
    </span>
  );
}

export default StatusBar;
