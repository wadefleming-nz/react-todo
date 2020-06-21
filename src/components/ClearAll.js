import React from 'react';

function ClearAll(props) {
  function clearAllClicked() {
    props.onClearAllClicked();
  }
  return <button onClick={clearAllClicked}>Clear All</button>;
}

export default ClearAll;
