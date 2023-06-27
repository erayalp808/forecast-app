import {useContext} from 'react'
import RegionContext from './RegionContext';

const changeSelectorColor = (e) => {
  let regionSelector = e.target;
  if (e.target.value != 'null') {
    regionSelector.style = {color: "black"}
  } else {
    regionSelector.style = {color: "grey"}
  }
}

function Form() {
  const {region, setRegion} = useContext(RegionContext);

  return (
    <form>
      <select 
      style={{color: "grey"}} 
      id='regionSelector' 
      name="region" 
      defaultValue='' 
      onChange={(e) => {
        setRegion(e.target.value);
        changeSelectorColor(e);
      }}
      >
        <option disabled="disabled" value=''>Select a region</option>
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