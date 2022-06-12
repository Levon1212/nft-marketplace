import React,{useState} from 'react';
import Chart, {
    Series,
    Legend,
    CommonSeriesSettings,
    Point,
    ArgumentAxis,
} from 'devextreme-react/chart';

import RangeSelector, {
    Size,
    Chart as ChartOptions,
    Margin,
    Scale,
    SliderHandle,
} from 'devextreme-react/range-selector';
import { zoomingData } from './data';

const ChartType1 = () => {
    const [visualRange,setVisualRange] = useState({ startValue: 10, endValue: 880 })
    const updateRange = (e)=>{
        setVisualRange(e.value);
    }
    return (
        <div className='chartType1'>
            <React.Fragment>
                <Chart
                    id="zoomedChart"
                    palette={['rgba(52, 195, 143, 0.5)']}
                    dataSource={zoomingData}
                >
                    <Size height={300} />
                    <Series argumentField="arg" valueField="y1" />
                    <ArgumentAxis visualRange={visualRange} />
                    <Legend visible={false} />
                    <CommonSeriesSettings>
                        <Point size={0} />
                    </CommonSeriesSettings>
                </Chart>
                <RangeSelector
                    dataSource={zoomingData}
                    onValueChanged={updateRange}
                >
                    <Size height={70} />
                    <Margin left={10}  />
                    <SliderHandle color={'#238'} width={20} opacity={1}/>
                    <Scale minorTickCount={1}  startValue={10} endValue={800} />
                </RangeSelector>
            </React.Fragment>
        </div>
    );
};

export default ChartType1;