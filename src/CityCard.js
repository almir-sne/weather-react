import React, {Fragment} from 'react';

export const CityCard = ({weather, onClose}) =>
    <Fragment>
        {weather &&
        <div className="well">
            <button type="button" className="close" onClick={onClose}>&times;</button>
            <p> {weather.location.city + ", " + weather.location.region + " - " + weather.location.country} </p>
            <h2>
                {weather.item.condition.temp}°C {weather.item.condition.text}
            </h2>
            <div className="row">
                <div className="col-sm-3">
                    <i className="fa fa-arrow-down"/>
                    {weather.item.forecast[0].low + '°C '}
                </div>
                <div className="col-sm-3">
                    <i className="fa fa-arrow-up"/>
                    {weather.item.forecast[0].high + '°C '}
                </div>
                <div className="col-sm-6">
                    Vento {weather.wind.speed}km/h
                </div>
            </div>
        </div>
        }
    </Fragment>