import img1 from "../assets/stranger.jpg"
import img2 from "../assets/stranger2.png"

function Carousel() {
    return (
        <div id="banner" class="carousel slide w-25" data-bs-ride="carousel">
              <div class="carousel-indicators">
    <button type="button" data-bs-target="#banner" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#banner" data-bs-slide-to="1"></button>
   
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100"/>
    </div>
  
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" ></span>

  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
    <span class="carousel-control-next-icon" ></span>
  
  </button>
</div>
      
    )

}

export default Carousel;