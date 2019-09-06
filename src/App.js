import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import * as jsonData from "./graph_data.json";

const styles = { position: "relitive", width: 1200, hight: 1000 };

const makeArray = key => {
  let arry = jsonData.default.map(function(e) {
    return e[key];
  });
  return arry;
};

let labels = makeArray("label");
let values = makeArray("value");
let colors = makeArray("color");

function App() {
  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: [
      {
        label: "",
        backgroundColor: colors,
        data: values
      }
    ]
  });
  return (
    <div style={styles} className="App">
      <Bar
        options={{
          response: true,
          title: { display: true, text: "Call Type Report" },
          legend: { display: false },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Counts"
                }
              }
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Call Type"
                }
              }
            ]
          }
        }}
        data={chartData}
      />
    </div>
  );
}

export default App;
