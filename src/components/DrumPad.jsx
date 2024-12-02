import React from "react";

function DrumPad({ id, keyTrigger, url, playSound }) {
  return (
    <div className="drum-pad" id={id} onClick={() => playSound(url, id)}>
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={url}></audio>
    </div>
  );
}

export default DrumPad;
