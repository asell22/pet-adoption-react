import React, { Component } from 'react';

class ZipForm extends Component {
  render() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <div className="col-sm-3">
            <input type="text" className="form-control" placeholder="Enter Zip Code" />
          </div>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
}

export default ZipForm;
