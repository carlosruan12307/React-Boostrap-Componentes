function Menusand(){
    return(
        <nav className="navbar bg-dark navbar-dark">
                <button className="navbar-toggler ms-auto" data-bs-toggle="collapse" data-bs-target="#test">
                <span className="navbar-toggler-icon"></span>

                </button>
                <div id="test" className="navbar-collapse collapse navbar-nav">
                    <li className="nav-item align-self-start  ms-3 text-center" style={{width: "8%"}}><a className="nav-link" href="#">a</a></li>

                    <li className="nav-item align-self-start  ms-3 text-center" style={{width: "8%"}}><a className="nav-link" href="#">a</a></li>
                </div>
        </nav>
    )
}

export default Menusand;