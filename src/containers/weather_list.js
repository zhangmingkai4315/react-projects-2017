import React,{Component} from 'react';
import {connect} from 'react-redux';
import Charts from '../components/charts';


class WeatherList extends Component{
    renderWeather(cityData){
        return (
            <Charts data={cityData}/>
        );
    }
    render(){
        return (<table className = "table table-hover">
                <thead>
                    <tr>
                        <th>城市</th>
                        <th>温度(C)</th>
                        <th>压强(hPa)</th>
                        <th>湿度(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>);
    }
}

function mapStateToProps(state){
    return {weather:state.weather};
}

export default connect(mapStateToProps)(WeatherList);