import React from 'react'
import navops from '../Home/optionList';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
const Options = () => {
  const navigate =useNavigate();
  return (
    <div className='optionsWrapper'>
      {navops.map(item=>(
        <div class="card mb-3 optCard" onClick={()=>navigate(item.path)}>
         <div class="row g-0 optContent">
          <div class="col-md-4 imgWrapper">
            <Link><img src={item.img} class="img-fluid rounded-start optImg" alt="..."/></Link>
          </div>
          <div class="col-md-8">
            <div class="card-body titlePart">
              <Link className='titleWrapper'><h5 class="card-title optTitle">{item.title}</h5></Link>
            </div>
          </div>
        </div>
      </div>
                   
      ))}  
      
    </div>
  )
}

export default Options;
