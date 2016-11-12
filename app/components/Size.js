import React, { PropTypes } from 'react';
import Header from './Header';
import { zipForm, btn } from '../styles/zipForm';

const Size = function ({ onSizeChange, onButtonClick, subheading, color }) {
  return (
    <div>
      <Header text={subheading} color={color}/>
      <div className="center" style={zipForm}>
        <select className="form-control" onChange={onSizeChange}>
          <optgroup label="Select Size">
            <option value="" style={{display:'none'}}>Select Size </option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
          </optgroup>
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
