import React from 'react'

const handleChange = (e) => {
  let regionSelector = e.target;
  if (e.target.value != 'null') {
    regionSelector.style = {color: "black"}
  } else {
    regionSelector.style = {color: "grey"}
  }
}

function Form() {
  return (
    <form>
      <select 
      style={{color: "grey"}} 
      id='regionSelector' 
      name="region" 
      defaultValue='default' 
      onChange={handleChange}
      >
        <option disabled="disabled" value='default'>Select a region</option>
        <option value="istanbul">Istanbul</option>
        <option value="Rome">Rome</option>
        <option value="New-York">New York</option>
        <option value="Tokyo">Tokyo</option>
        <option value="Paris">Paris</option>
        <option value="Berlin">Berlin</option>
      </select>
    </form>
  )
}

export default Form