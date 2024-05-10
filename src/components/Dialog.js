import React, { useRef } from 'react';

function Dialog() {
  const dialogRef = useRef(null);
  const toggleDialog = () => {
    if (!dialogRef.current) return;
    dialogRef.current.hasAttribute('open')
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  };

  return (
    <div>
      <button onClick={toggleDialog}>Open Dialog</button>
      <dialog ref={dialogRef}>
        <div className='dialog-wrapper'> 
          <input type='button' onClick={toggleDialog} value={"Close"} />  
        </div>
      </dialog>
    </div>
  )
}

export default Dialog;