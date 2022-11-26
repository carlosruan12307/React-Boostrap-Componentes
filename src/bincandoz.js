import stranger from "./assets/stranger.jpg"
import { useState,useEffect } from 'react';

function Brincandoz(){
    useEffect(() => {
            const a = document.getElementById("a")
            a.style.width = "50%"
           
     
                const b = document.getElementsByClassName("page-item") 
                for(var i = 0; i < b.length;i++){
                    b[i].classList.add("active");
                }

               
            
       },[])

    return(
<div>
<section  className="position-relative ">
<img className=" p-0 img-fluid m-0 " style={{maxHeight: "100px"}} src={stranger}  />
<div  style={{position : "absolute",bottom: "100px" , left: "0px"}}> a</div>
</section>

<div className="progress">
<div id="a" className="progress-bar progress-bar-animated bg-info ">50%</div>
<div id="a" className="progress-bar progress-bar-animated bg-warning">50%</div>
</div>

<div className="spinner-border spinner-border-sm text-danger">

</div>

<ul className="pagination">
        <li className="page-item"> <a className="page-link">a</a></li>
        <li></li>
</ul>

<div id="cbf" className="collapse bg-primary border rounded-pill p-2">
    aaaa.com.br

</div>
<button className="btn btn-danger text-center" data-bs-toggle="collapse" data-bs-target="#cbf"></button>

<div className="dropdown d-flex justify-content-center">
<button className="dropdown-toggle" data-bs-toggle="dropdown">a</button>
<div className="dropdown-menu">
<a className="dropdown-item">a</a>
</div>
<div>a</div>
<div>a</div>

</div>

<div className=" nav nav-tabs nav-justified  ">
    <li className="nav-item">
<a href="#" className="nav-link">aa</a>
    </li>

    <li className="nav-item dropdown">
<a href="#" className="active nav-link dropdown-toggle" data-bs-toggle="dropdown">aa</a>
    <ul className="dropdown-menu">
        <li><a href="#" className="dropdown-item">bb</a></li>
    </ul>
    </li>

    
   
</div>
</div>

 


    )
}

export default Brincandoz;