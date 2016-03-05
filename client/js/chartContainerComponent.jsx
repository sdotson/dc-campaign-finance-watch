import React from 'react/addons';
import Chart from './chart.jsx';
import {
    Button
} from 'react-bootstrap';
import Client from './api';

class ChartContainerComponent extends React.Component {
    constructor (props) {
        super(props);
    }

    _setSvg (svg) {
        this.setState({'svg': svg});
    }

    _downloadChart () {
        console.info('beginning chart download', this.state.svg);
        alert('This feature is still pending work.');
    }

    render () {
        if(this.props.chartInfo) {
            return (
                <div>
                    <Chart onSvgCreate={this
                        ._setSvg
                        .bind(this)} chartInfo={this.props.chartInfo}></Chart>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ChartContainerComponent;
