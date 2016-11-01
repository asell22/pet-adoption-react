import React, { PropTypes } from 'react';
import Header from './Header';
import { zipForm, btn } from '../styles/zipForm';

const Size = function ({ onSizeChange, onButtonClick, subheading, color }) {
  return (
    <div>
      <Header text={subheading} color={color}/>
      <div className="center" style={zipForm}>
        <select className="form-control" onChange={onSizeChange}>
          <option value="" style={{display:'none'}}>Select Size </option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="extra-large">Extra Large</option>
        </select>
      </div>
      <button className="btn btn-default center" style={btn} onClick={onButtonClick}>Select</button>
    </div>
  )
}

Size.propTypes = {
  onSizeChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
}

export default Size;
