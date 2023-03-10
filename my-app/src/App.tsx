import React, { Component } from 'react'
import Viz from 'react-ab-scatter'

let mockData = {
    "nodes": [
      {
        "idx": 0,
        "id": "id0",
        "group": 1
      },
      {
        "idx": 1,
        "id": "id1",
        "group": 2
      },
      {
        "idx": 2,
        "id": "id2",
        "group": 1
      },
      {
        "idx": 3,
        "id": "id3",
        "group": 2
      },
      {
        "idx": 4,
        "id": "id4",
        "group": 1
      }
    ],
    "metricsA" : [
      {
        "x": 400,
        "y": 120
      }, {
          "x": 100,
          "y": 100
      },{
        "x": 200,
        "y": 255
      },{
        "x": 20,
        "y": 253
      },{
        "x": 40,
        "y": 250
      }
    ],
    "metricsB" : [
      {
          "x": 350,
          "y": 230
      }, {
          "x": 500,
          "y": 220
      }, {
          "x": 650,
          "y": 250
      }, {
          "x": 800,
          "y": 270
      }, {
        "x": 820,
        "y": 264
      }
    ]
  }

class Example extends Component {
  render() {
    return <Viz data = {mockData}
                WIDTH = {1000} // scatter plot width
                HEIGHT = {600} // scatter plot height
                Y_TRANSFORM = {20} // position on canvas - y
                X_TRANSFORM = {100}/> // position on canvas - x
  }
}

function App() {
  return (
    <div className="App">
      <Example/>
    </div>
  );
}

export default App;
