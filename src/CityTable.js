import React, {Fragment} from 'react';

export const CityTable = ({cities}) =>
    <Fragment>
        <div className="col-md-4">
            <City/>

            {cities && cities.slice(0, cities.length/2).map(city =>
                <City key={city.location.city} min={city.item.forecast[0].low} max={city.item.forecast[0].high} name={city.location.city}/>
            )}
        </div>

        <div className="col-md-4">
            <div className="hidden-sm">
                <City />
            </div>

            {cities && cities.slice(cities.length/2, cities.length).map(city =>
                <City key={city.location.city} min={city.item.forecast[0].low} max={city.item.forecast[0].high} name={city.location.city}/>
            )}
        </div>
    </Fragment>

export const City = ({min = 'Min', max = 'Max', name}) =>
    <div className="row">
        <div className="col-xs-1"> {min} </div>
        <div className="col-xs-1"> {max} </div>
        <div className="col-xs-7"> {name} </div>
    </div>