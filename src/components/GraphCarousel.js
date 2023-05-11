import React, { useState, useEffect } from "react";
import StockChartOne from "../util/stockGraph";

const Slide1 = () => {
    return <StockChartOne symbol="AAPL" />;
};

const Slide2 = () => {
    return <StockChartOne symbol="MSFT" />;
};

const Slide3 = () => {
    return <StockChartOne symbol="TSMC" />;
};

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const slides = [[<Slide1 />, <Slide2 />, <Slide3 />]]

    const handleClick = (increment) => {
        setCurrentSlide((currentSlide + increment + 3) % 3 + 1);
      };

    let component;
    if (currentSlide === 1) {
        component = <Slide1 />;
      } else if (currentSlide === 2) {
        component = <Slide2 />;
      } else {
        component = <Slide3 />;
      }

    return (
        <div>
            <div>
                <button onClick={() => handleClick(-1)}>Prev</button>
                <button onClick={() => handleClick(1)}>Next</button>
            </div>
            {component}
        </div>
    );
};

export default Carousel;
