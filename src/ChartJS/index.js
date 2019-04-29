import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

class Chart extends Component {
  constructor() {
    super();
    this.state = {
}
  }



  render() {

    return(
      <div>
        <h1> ChartJS-2 </h1>
        <Pie
          data={data}
          width={200}
          height={50}
        />

  </div>
    )
  }
}

export default Chart;
