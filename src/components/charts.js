import React from 'react';
import _ from 'lodash';
import { Sparklines ,SparklinesBars,SparklinesReferenceLine } from 'react-sparklines';
import GoogleMap from './google_map.js';
function average(data){
    if(data.length>0){
        return _.round(_.sum(data)/data.length);
    }else{
        return 0;
    }
   
}
export default function Charts(props){
    let cityData = props.data;
    let name = cityData.city.name;
    let temps = cityData.list.map(weather => weather.main.temp-273.15);
    let pressures = cityData.list.map(weather => weather.main.pressure);
    let humiditys = cityData.list.map(weather => weather.main.humidity);

    let location=cityData.city.coord;

    return(
           <tr key={name}>
                <td><GoogleMap location = {location}/></td>
                <td>
                    <Sparklines height={120} width={180} data ={temps}>
                        <SparklinesBars style={{ stroke: "white", strokeWidth: "1", fill: "#41c3f9" }} />
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <div>平均气温{average(temps)}度</div>
                </td>
                <td>
                    <Sparklines height={120} width={180} data ={pressures}>
                       <SparklinesBars style={{ stroke: "white", strokeWidth: "1", fill: "orange" }} />
                       <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                     <div>平均气压{average(pressures)}hPa</div>
                </td>

                <td>
                    <Sparklines height={120} width={180} data ={humiditys}>
                        <SparklinesBars style={{ stroke: "white", strokeWidth: "1", fill: "blue" }} />
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                     <div>平均湿度{average(humiditys)}%</div>
                </td>
            </tr>
    )
}