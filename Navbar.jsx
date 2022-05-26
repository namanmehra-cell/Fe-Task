import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// Using Navbar from Bootstrap 5 with adding customize css by myself.

function Nav(){
    return(
        <>
        <nav className="navbar navbar-light bg-dark" style={{height:'5rem'}}>
  <div  className="container-fluid" >
    <a className="navbar-brand" style={{fontSize: '1rem',
    color:'#f90',
    fontWeight:'bold',
    fontSize:'1rem'}}>Fe Task</a>
    <form className="d-flex">
    <button className="btn btn-primary" type="submit" style={{marginRight:"16px",padding:'12px',fontWeight:'bold',backgroundColor:'white',color:'black', borderRadius: '4px',
    borderTopRightRadius: '5px',
    borderBottomLeftRadius: '15px'}}>info</button>
    <button className="btn btn-primary" type="submit" style={{marginRight:"16px",padding:'12px',fontWeight:'bold',backgroundColor:'#f90',color:'black', borderRadius: '4px', 
    borderTopRightRadius: '5px',
    borderBottomLeftRadius: '15px'}}>task</button>
    </form>
  </div>
</nav> 
        </>
    )
}

export default Nav;