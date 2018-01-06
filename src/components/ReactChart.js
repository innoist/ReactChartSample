import {Bar, Line} from 'react-chartjs-2';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


export class ReactChartsPage extends React.Component {

      
    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          };
          const lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          };
        return (
            <div>
            <div style={{height:"400px"}}>
            <Bar
	data={data}
	width={100}
	height={50}
	options={{
		maintainAspectRatio: false
	}}
/>
</div>
<div style={{height:"400px"}}>
<Line data={lineData} />
</div>
</div>

        );
      }
}


// function mapStateToProps(state) {
//     return {
//       fuelSavings: state.fuelSavings
//     };
//   }
  
//   function mapDispatchToProps(dispatch) {
//     return {
//       actions: bindActionCreators(actions, dispatch)
//     };
//   }
  
  export default connect(
    null,
    null
  )(ReactChartsPage);
  