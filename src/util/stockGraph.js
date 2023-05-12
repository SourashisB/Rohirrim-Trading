import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const StockChartOne = ({symbol}) => {

    const apiKey = 'I3PKP8LDYEAQT7FU';
    const [options, setOptions] = useState({
        chart: {
          type: "candlestick",
          height: 350,
        },
        title: {
          text: symbol+" Stock Price",
          align: "left",
          style: {
            color: '#fff'
          }
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      });
    
      const [series, setSeries] = useState([
        {
          data: [],
        },
      ]);
    
      useEffect(() => {
        axios
          .get(
            `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=YOUR_API_KEY`
          )
          .then((response) => {
            console.log('called api')
            const data = response.data["Time Series (Daily)"];
            const stockData = [];
            for (let date in data) {
              stockData.push({
                x: new Date(date).getTime(),
                y: [
                  parseFloat(data[date]["1. open"]),
                  parseFloat(data[date]["4. close"]),
                  parseFloat(data[date]["3. low"]),
                  parseFloat(data[date]["2. high"]),
                ],
              });
            }
            setSeries([
              {
                data: stockData.reverse(),
              },
            ]);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
      return (
        <Chart options={options} series={series} type="candlestick" height={350} width={700} />
      );
    };
    

export default StockChartOne;