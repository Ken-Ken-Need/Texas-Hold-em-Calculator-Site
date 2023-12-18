import React from "react";

function Reload() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <button type="reset" value="Reset" className="btn" onClick={refreshPage}>
        Reload!
      </button>
    </div>
  );
}

export default Reload;
