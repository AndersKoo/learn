import React from "react";
import "./Products.css";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

export default function Products() {
  return (
    <div className="products">
      <h1 className="products_header_title">We offer</h1>
      <div className="plans">
        <Bounce left>
          <div className="plan plan--light">
            <h2 className="plan__title">basic</h2>
            <p className="plan__price">
              $49<span>/month</span>
            </p>
            <p className="plan__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi
              sit reprehenderit aliquam.
            </p>
            {/* <a href="#" className="Buy now"></a> */}
          </div>
        </Bounce>

        <Zoom top>
          <div className="plan plan--main">
            <h2 className="plan__title">super</h2>
            <p className="plan__price">
              $99 <span>/month</span>
            </p>
            <p className="plan__description">
              Eleifend cursus volutpat risus convallis nam sed quam
              sollicitudin.
            </p>
            {/* <a href="#" className="Buy now"></a> */}
          </div>
        </Zoom>
        <Bounce right>
          <div className="plan plan--light">
            <h2 className="plan__title">enterprise</h2>
            <p className="plan__price">
              $199 <span>/month</span>
            </p>
            <p className="plan__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* <a href="#" className="Buy now"></a> */}
          </div>
        </Bounce>
      </div>
    </div>
  );
}
