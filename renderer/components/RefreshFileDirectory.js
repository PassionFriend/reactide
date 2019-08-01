import React from 'react';

function handleRefreshButtonClick (event, refreshFileDirectory){
  event.stopPropagation();
  refreshFileDirectory();
}

function RefreshFileDirectory ({ updateFileDirectory }){
  return (
    <div className="btn icon-btn" onClick={(event) => { handleRefreshButtonClick(event, updateFileDirectory) }} >
      <i className="fas fa-redo-alt" />
      Refresh
    </div>
  )
}

export default RefreshFileDirectory;