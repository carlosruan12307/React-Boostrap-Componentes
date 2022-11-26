function NavDD(){
    return(
       
     <ul className="nav nav-justified border-0 nav-tabs w-25">
        <li className=" nav-item dropdown"><a className="nav-link dropdown-toggle border rounded-pill " type="button" data-bs-toggle="dropdown" data-bs-target="#test">a</a>
        
        <div id="test" className="dropdown-menu dropdown-center">
<div className="dropdown-item">a</div>
<div className="dropdown-divider"></div>
<div className="dropdown-item">a</div>
        </div>
        </li>
        
        <li className="nav-item  dropdown"><a className="nav-link dropdown-toggle border rounded-pill" type="button" data-bs-toggle="dropdown" data-bs-target="#test1">a</a>
        
        <div id="test1" className="dropdown-menu dropdown-menu-end">
<div className="dropdown-item">a</div>
<div className="dropdown-divider"></div>
<div className="dropdown-item">a</div>
        </div>
        </li>
     
   
     </ul>
    )
}

export default NavDD;