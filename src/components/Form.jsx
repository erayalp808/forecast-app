import {useContext} from 'react'
import RegionContext from './RegionContext';

const changeSelectorColor = (e) => {
  let regionSelector = e.target;
  if (e.target.value != 'default') {
    regionSelector.style = {color: "black"}
  } else {
    regionSelector.style = {color: "grey"}
  }
}

function Form() {
  const {region, setRegion} = useContext(RegionContext);

  return (
    <form className='form'>
      <select
      style={{color: `${(region == "default") ? "grey" : "black"}`}} 
      id='regionSelector' 
      name="region" 
      defaultValue={region} 
      onChange={(e) => {
        setRegion(e.target.value);
        changeSelectorColor(e);
      }}
      >
        <option disabled="disabled" value='default'>Select a region</option>
        <option value="istanbul">Istanbul</option>
        <option value="rome">Rome</option>
        <option value="new-york">New York</option>
        <option value="tokyo">Tokyo</option>
        <option value="paris">Paris</option>
        <option value="berlin">Berlin</option>
      </select>
    </form>
  )
}

export default Form