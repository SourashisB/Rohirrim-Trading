import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { config } from "react-spring";
import Carroussel from "../util/Carousel";
import StockChartOne from "../util/stockGraph";


export default function GraphCarousel2() {
    let cards = [
        {
            key: uuidv4(),
            content: <StockChartOne symbol="AAPL" />
        },
        {
            key: uuidv4(),
            content: <StockChartOne symbol="MSFT" />
        },
        {
            key: uuidv4(),
            content: <StockChartOne symbol="NFLX" />
        }];

    return (
        <Carroussel
            cards={cards}
            height="500px"
            width="90%"
            margin="0 auto"
            offset={2}
            showArrows={false}
        />
    )
}