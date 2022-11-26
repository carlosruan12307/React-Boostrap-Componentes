function Offcanvas(){
    return(
        <div>
<button className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#off">offcanvas</button>
        <div  id="off" className="offcanvas offcanvas-end">
<div className="offcanvas-header">
<ul>
    <li><a>a</a></li>
</ul>
<button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
</div>

<div className="offcanvas-body">
aa
</div>
        </div>
        </div>
        
    )
}

export default Offcanvas;