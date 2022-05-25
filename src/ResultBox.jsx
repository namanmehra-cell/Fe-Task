import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function ResultBox(props) {
  return (

      <div class="row">
      <div class="col-sm">
      {props.name}
      </div>
      <div class="col-sm">
      {props.cocktail}
      </div>
      <div class="col-sm">
      {props.points}
      </div>
      <div class="col-sm">
      <button onClick={()=>{props.onEdit(props.id)}} style={{borderRadius:'4px'}}>Edit</button> <button onClick={()=>{props.onDel(props.id)}} style={{borderRadius:'4px'}} >Delete</button>
      </div>
    </div>
  

  )
}

export default ResultBox;