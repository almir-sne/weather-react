import React, {Fragment} from 'react';

export const CityTable = ({cities, onClickHandler}) =>
    <Fragment>
        {cities &&
        <Fragment>
            <div className="col-md-4 col-lg-3">
                <City/>

                <CityList cities={cities.slice(0, cities.length / 2)} onClickHandler={onClickHandler}/>
            </div>

            <div className="col-md-4 col-lg-3">
                <div className="hidden-sm hidden-xs">
                    <City/>
                </div>

                <CityList cities={cities.slice(cities.length / 2, cities.length)} onClickHandler={onClickHandler}/>
            </div>
        </Fragment>
        }
    </Fragment>

const CityList = ({cities, onClickHandler}) =>
    cities.map(city =>
        <City key={city.location.city} min={city.item.forecast[0].low} max={city.item.forecast[0].high}
              name={city.location.city} onClickHandler={() => onClickHandler(city)}/>
    );

const City = ({min = 'Min', max = 'Max', name, onClickHandler}) =>
    <div className="row">
        <div className="col-xs-1"> {min} </div>
        <div className="col-xs-1"> {max} </div>
        <div className="col-xs-8"><a href="#" onClick={onClickHandler}> {name} </a></div>
    </div>