import React from 'react';

const PetsResult = ({pets}) => {
  return (
    <div>
      {pets.map((pet, indx) =>
      <div className="col-sm-3" style={{textAlign: 'center', margin: '40px 0px'}} key={indx.toString()}>
        <div style={{ cursor: 'pointer'}}>
          {Object.keys(pet.media).length !== 0 ? <img src={pet.media.photos.photo[2].$t} width="150" height="150" alt="" style={{borderRadius: '5%', objectFit: 'cover'}}/> : <div ><span style={{border: '1px solid #000', padding: '50px 0', display: 'block', background: '#ccc', borderRadius: '2%',  cursor: 'pointer'}}>NO PHOTO</span></div>}
          <h5>Meet {pet.name.$t}</h5>
        </div>
      </div>
      )}
    </div>

  )
}

export default PetsResult;
