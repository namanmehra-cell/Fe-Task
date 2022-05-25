import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Input(props){

      const[value,setName]=useState({
        name:'',
        cock:'Malta',
        no:0
      })
     
      function sName(event){
        const name = event.target.name
        const value=event.target.value
        setName((prevVal)=>{
          if(name==='naam'){
          return{name:value,
            cock:prevVal.cock,
            no:prevVal.no}  
          }
          else if(name==='option'){
            return{name:prevVal.name,
              cock:value,
              no:prevVal.no} 
            }
            else if(name==='number'){
              return{name:prevVal.name,
                cock:prevVal.cock,
                no:value} 
              }
              else if(value===null){
                alert('please')
              }
        })
      }

      function reset(event){
        setName({
          name:'',
          cock:'Malta',
          no:0
        })
        event.preventDefault();
      }

      function submitIt(event){
        props.onAdd(value)
        event.preventDefault();
    }


    return(
        <>


        <form style={{heigth:'90%',width:'30%',margin:'45px',backgroundColor:'#222',padding:'36px',borderRadius:'10px'}}>
        <h2 style={{color:'white',fontWeight:'bold'}}>Add Entry</h2>
  <div class="mb-3">
    <p for="exampleInputEmail1" style={{color:'white',textAlign:'left'}} class="form-label">Name</p>
    <input  onChange={sName} type="text" name='naam' value={value.name} class="form-control" id='text' required/>
    
  </div>
  <p style={{color:'white',textAlign:'left'}}>Select cocktail</p>
  <select onChange={sName}  class="form-select" name='option' value={value.cock} aria-label="Default select example">
  <option value="Malta">Malta</option>
  <option value="Santra">Santra</option>
  <option value="Sonfee">Sonfee</option>
</select>
  <div class="mb-3">
    <p style={{color:'white',textAlign:'left'}} for="exampleInputPassword1" class="form-label">Points (0 to 10)</p>
    <input onChange={sName}  name='number' value={value.no} type="number" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit"style={{marginRight:'20px'}} class="btn btn-primary" onClick={reset}>Reset</button>
  <button type="submit" class="btn btn-warning" onClick={submitIt} >Add</button>
  
</form>
</>
    )

}

export default Input