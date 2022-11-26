import img1 from "../assets/stranger.jpg"
import img2 from "../assets/stranger2.png"
function Card(){
    return(
<div className="card d-inline-flex" style={{width: "20%" , height: "20%"}}>
    <div className="card-header">
        <h3 className="card-title">Netflix :)</h3>
        <h1 className="card-subtitle">aa</h1>
    </div>
    <div className="card-body" style={{width: "100%" , height: "50%"}}>
        <img className="card-img " src={img1} ></img>
    </div>
    <div className="card-footer">
<div className="card-text">bb</div>
    </div>

</div>
    )


}

export default Card;