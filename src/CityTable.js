import React from 'react';

export const CityTable = ({cities}) =>
    <table>
        <thead>
        <tr>
            <th> Min</th>
            <th> Max</th>
            <th/>
        </tr>
        </thead>
        <tbody>
        {cities && cities.map(city =>
            <City key={city.location.city} min={city.item.forecast[0].low} max={city.item.forecast[0].high} name={city.location.city}/>
        )}
        </tbody>
    </table>

export const City = ({min, max, name}) =>
    <tr>
        <td> {min} </td>
        <td> {max} </td>
        <td> {name} </td>
    </tr>