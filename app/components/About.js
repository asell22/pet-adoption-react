import React from 'react';

const About = () => {
  return (
<div>
  <img src="https://www.petfinder.com/wp-content/themes/petfinder2013/img/pet_finder_logo_tm.svg" style={{width: '300px', marginTop:'20px'}}/>
  <div style={{fontSize: '30px', marginTop:'20px'}}>
    <div>Petfinder is an online, searchable database of animals who need homes. It is also a directory of nearly 14,000 animal shelters and adoption organizations across the U.S., Canada and Mexico. Organizations maintain their own home pages and available-pet databases.</div>

    <div style={{marginTop:'30px'}}>For the past 20 years, Petfinder has helped 25 million pets find their families through adoption.</div>

    <div style={{marginTop:'30px'}}>This application uses Petfinder's API. The Petfinder API gives developers access to access Petfinder's database of over 300,000 adoptable pets and 11,000 animal welfare organizations (AWO).</div>
  </div>
</div>

  )
}

export default About
