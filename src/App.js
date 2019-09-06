import React from "react";
import { Bar } from "react-chartjs-2";
import * as jsonData from "./graph_data.json";
import * as styles from "./App.css"

function App() {
  const makeArray = key => jsonData.default.map( element => element[key])

  let labels = makeArray("label");
  let values = makeArray("value");
  let colors = makeArray("color");

  let chartData = {
    labels: labels,
    datasets: [
      {
        backgroundColor: colors,
        data: values
      }
    ]
  };

  return (
    <div style={styles} className="App">
      <Bar
        options={{
          response: true,
          title: { display: true, text: "Call Type Report", fontSize: 24 },
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
