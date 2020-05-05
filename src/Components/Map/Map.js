import React from "react";
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {Card} from "antd";

const YMap = () => {
    const mapData = {
        center: [55.751574, 37.573856],
        zoom: 9,
    };
    const coordinates = [
        [55.777793, 37.680445],
        [55.668635, 37.518758],
        [55.856477, 37.581541],
        [55.657768, 37.761438],
    ]
  return(  <YMaps>
        <Card title='Наши адреса' className="card">
            <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                <Map defaultState={mapData}>
                    {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                </Map>
            </div>

      <h3 style={{marginTop:'20px'}}>Мы Уже на рынке Москвы 5 лет ,мы ждем вас по адресам</h3>  <br/>
        Москва Спартаковская площадь, 1/7 ,<br/>
        Москва Ленинский проспект, 99 ,<br/>
        Москва Алтуфьевское шоссе 27Б с2 ,<br/>
        Москва Братиславская улица, 19к1

        </Card>
    </YMaps>
  )
}

export default YMap