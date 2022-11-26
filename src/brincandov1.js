import { useState } from "react";
import img1 from "./assets/stranger.jpg"
import img2 from "./assets/stranger2.png"
function Brincandov1(){
    const [a,seta] = useState(true)
    return(
        <div>
    <header className="border d-flex justify-content-center border-secondary o">

<img className=" h-15 w-25 py-3 ps-3" src={img1}  ></img>
<p className="text-white text-light m-auto align-self-center">MODELO DE SITE BOOSTRAP</p>

</header>

<nav className="navbar navbar-expand navbar-dark border border-danger p-3 f">
            <ul className="navbar-nav ">
                <li className="nav-item"><a href="#" className="nav-link active">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link active">Filmes</a></li>
                <li className="nav-item"><a href="#" className="nav-link active">Series</a></li>
            </ul>
</nav>


<div className="container border border-dark mt-5">
<div className="border border-danger mt-5">
<h2>a</h2>
<h5>bb</h5>
<p>asasasa</p>
</div>

<div className="mt-5">
<h2>a</h2>
<h5>bb</h5>
<p>asasasa</p>
</div>

</div>
        </div>
   
    
       


    )
}

export default Brincandov1;