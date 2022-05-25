//import './App.css';
import Nav from './Navbar'
//import Input from './Input';
//import ResultBox from './ResultBox';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  const[items,setItems]=useState([])
  
  const[value,setName]=useState({
    name:'',
    cock:'Malta',
    no:null
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
      no:null
    })
    event.preventDefault();
  }

  function submitIt(event){
    if(value.name==='' && value.no===null ){
      alert('Please enter name and points')
    }
  
    else{setItems(prevValue=>{
      return [...prevValue,value]
    })}
    event.preventDefault();
}


  function deleteIt(id){
        setItems(function del(prevsNote){
          return prevsNote.filter((items,index)=>{
              return index !== id;
      })

    })
    console.log(id);
}
function editItem(id,event){
  let newEdit = items.find((elem,index)=>{
    return index === id
  })

  alert('Sorry didnt added this functionality. ' + "Id number is "+ (id+1))
  event.preventDefault();
}
// console.log(items);
  return (
    <div className="App" style={{backgroundColor:'#333333',height:'100vh'}}>
    <Nav/>
    {/* <Input onAdd={addItems}/> */}
    <>
    <form style={{heigth:'90%',width:'30%',margin:'45px',backgroundColor:'#222',padding:'36px',borderRadius:'10px'}}>
        <h2 style={{color:'white',fontWeight:'bold'}}>Add Entry</h2>
  <div className="mb-3">
    <p for="exampleInputEmail1" style={{color:'white',textAlign:'left'}} className="form-label">Name</p>
    <input  onChange={sName} type="text" name='naam' value={value.name} className="form-control" id='text' required/>
    
  </div>
  <p style={{color:'white',textAlign:'left'}}>Select cocktail</p>
  <select onChange={sName}  className="form-select" name='option' value={value.cock} aria-label="Default select example">
  <option value="Malta">Malta</option>
  <option value="Santra">Santra</option>
  <option value="Sonfee">Sonfee</option>
</select>
  <div className="mb-3">
    <p style={{color:'white',textAlign:'left'}} for="exampleInputPassword1" className="form-label">Points (0 to 10)</p>
    <input onChange={sName}  name='number' value={value.no} type="number" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit"style={{marginRight:'20px'}} className="btn btn-primary" onClick={reset}>Reset</button>
   <button type="submit" className="btn btn-warning" onClick={submitIt}>Add</button>
  
</form>
    </>
    <div className="float-xl-start" style={{ color:'white',backgroundColor:'#212121',margin:'auto 12px 18px 40px',borderRadius:'5px' ,width:'750px',height:'auto',float:'top',maxWidth:'auto'}}>
    <h2 style={{textAlign:'center'}}>Entries</h2>
  <div style={{backgroundColor:'#f90',height: '40px',
  fontWeight: 'bold',
  paddingTop: '10px',
  color: '#333'}} className="container">
  <div className="row">
    <div className="col-sm">
      Name
    </div>
    <div className="col-sm">
      Cocktail
    </div>
    <div className="col-sm">
      Points Given
    </div>
    <div className="col-sm">
    Action
    </div>
  </div>
</div>

    {items.map((item,index)=>{
      return   <div className="row">
      <div className="col-sm">
      {item.name}
      </div>
      <div className="col-sm">
      {item.cock}
      </div>
      <div className="col-sm">
      {item.no}
      </div>
      <div className="col-sm">
      <button onClick={()=>{editItem(index)}} style={{borderRadius:'4px'}}>Edit</button> <button onClick={()=>{deleteIt(index)}} style={{borderRadius:'4px'}} >Delete</button>
      </div>
    </div>

    })}
    </div>
  </div>
  );
}

export default App;
