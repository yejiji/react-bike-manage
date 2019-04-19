import React from 'react'
import {Row,Col} from 'antd';
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios/index'
export default class Header extends React.Component{
    state={

    }
    componentWillMount(){
        this.setState({
            userName:'NightJson'
        })
        setInterval(()=>{
           let sysTime =  Util.formateDate(new Date().getTime());
           this.setState({
               sysTime
           })
        },100)
        this.getWeatherAPIData()
    }
    getWeatherAPIData() {
         axios.jsonp({
             url:'https://restapi.amap.com/v3/weather/weatherInfo?key=3b5e3323784003ad725213641ad44749&city=110000'
         }).then((res)=>{
             if(res.status === '1'){
                   let data = res.lives[0];
                   this.setState({
                       weather:data.weather
                   })
                    
             }
         })  
    }
    
    render() {
        return (
            <div className="header">
               <Row className="header-top">
                   <Col span={24}>
                         <span>欢迎,{this.state.userName}</span>
                         <a href="#">退出</a>
                   </Col>   
                </Row>   
                <Row className="breadercrumb">
                    <Col span={4} className="breadercrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">
                           {this.state.weather}
                        </span>
                    </Col>
                </Row> 
             </div>
        )
    }
    
}