import React, {Component} from 'react';
import Plot from 'react-plotly.js';

class PlotlyComponent extends Component {
  constructor() {
    super();
    this.state = {
}
  }


  render() {

    return(
      <div>
        <h1> Plotly </h1>
        <Plot
                data={[
                  {
                    type: 'scatter',
                    marker: {color: 'red'},
                  },
                  {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={{width: 400, height: 400}}
              />      </div>
    )
  }
}

export default PlotlyComponent;
