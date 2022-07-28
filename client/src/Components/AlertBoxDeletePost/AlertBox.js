import React from 'react'
import "./AlertBox.css";

const AlertBox = () => {
  return (
    <div className="container">
  <input type="checkbox" id="check" />
  <label className="show_button" htmlFor="check">Click Me</label>
  <div className="background" />
  <div className="alert_box">
    <div className="icon">
      <i className="fas fa-exclamation"  />
    </div>
    <header>Confirm</header>
    <p>Are you sure want to permanently delete this Photo?</p>
    <div className="btns">
      <label htmlFor="check">Yes, Delete!</label>
      <label htmlFor="check">Cancel</label>
    </div>
  </div>
</div>
  )
}

export default AlertBox