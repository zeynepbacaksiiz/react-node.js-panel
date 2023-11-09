import React from "react";
import { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { fetchMemories } from "../actions/projectActions";

import { useDispatch, useSelector } from "react-redux";

const Slider = () => {
  const options = {
    margin: 10,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  const memories = useSelector((state) => state.memories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMemories());
  }, [dispatch]);

  return (
    <div>
      


                <div className="container-fluid  pb-3  slider">
                <OwlCarousel
                  className="home owl-theme"
                  autoplay
                  nav
                  dots
                  loop
                  center={true}
                  {...options}
                >
                      {memories.map((ty)=>{
            return (
                  <img
                    src={ty.image}
                    alt=""
                    style={{ height: "150px", width: "100%" }}
                  />
                  );
              
                })};
                </OwlCarousel>
              </div>
      
 
    </div>
  );
};

export default Slider;
