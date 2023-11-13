// import React from "react";
// import slider1 from '../images/slider1.jpg'
// import slider2 from '../images/slider2.jpg'
// import slider3 from '../images/slider3.jpg'


// export default function Slider() {
    
//   return (
//     <div>
//       <div id="carouselExample" class="carousel slide">
//         <div class="carousel-inner">
//           <div class="carousel-item active">
//             <img src={slider1} class="d-block w-100" alt="..." />
//           </div>
//           <div class="carousel-item">
//             <img src={slider2} class="d-block w-100" alt="..." />
//           </div>
//           <div class="carousel-item">
//             <img src={slider3} class="d-block w-100" alt="..." />
//           </div>
//         </div>
//         <button
//           class="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="prev"
//         >
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Previous</span>
//         </button>
//         <button
//           class="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="next"
//         >
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function Slider() {
//     const imageStyle = {
//       width: '50%', // Set the width to 100% of the container
//       height: '50%', // Maintain the aspect ratio
//     };
  
//     return (
//       <div>
//         <div id="carouselExample" className="carousel slide">
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img src={slider1} className="d-block w-100" alt="..." style={imageStyle} />
//             </div>
//             <div className="carousel-item">
//               <img src={slider2} className="d-block w-100" alt="..." style={imageStyle} />
//             </div>
//             <div className="carousel-item">
//               <img src={slider3} className="d-block w-100" alt="..." style={imageStyle} />
//             </div>
//           </div>
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExample"
//             data-bs-slide="prev"
//           >
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExample"
//             data-bs-slide="next"
//           >
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//     );
//   }
// import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from 'react'
import "./Myapp.css"

const Slider = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay>
          <div className="images">
            <img src="../images/pic2.png" alt="image1" />
          </div>
          <div className="images">
            <img src="../images/slider1.jpg" alt="image2" />
          </div>
          <div className="images">
            <img src="../images/pic3.jpg" alt="image3" />
          </div>
        </Carousel>
    </div>
  )
}

export default Slider
