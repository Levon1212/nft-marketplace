import React,{useState} from 'react';
import Chart, {
    Series,
    Legend,
    CommonSeriesSettings,
    Point,
    ArgumentAxis, Tick,
} from 'devextreme-react/chart';

import RangeSelector, {
    Size,
    Chart as ChartOptions,
    Margin,
    Scale,
    SliderHandle,
} from 'devextreme-react/range-selector';
import { zoomingData } from './data';
const SmallChart = (props) => {
    const [visualRange,setVisualRange] = useState({ startValue: 10, endValue: 880 })
    const updateRange = (e)=>{
        setVisualRange(e.value);
    }
    return (
        <div className={`smallChart ${props.show ? '' : 'd-none'}`}>
            <Chart
                id="zoomedChart"
                palette={['rgba(235, 87, 87, 1)']}
                dataSource={zoomingData}
            >
                <Size label={false} height={40} width={120}/>
                <Series hoverMode={'none'} valueField="y1" />
                <ArgumentAxis visualRange={visualRange} />
                <Legend visible={true} opa/>
                {/*<Tick width={0} height={0}/>*/}
                <CommonSeriesSettings>

                    <Point size={0} />
                </CommonSeriesSettings>
            </Chart>
        </div>
    );
};

export default SmallChart;