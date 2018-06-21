import React from 'react';

export const CityTable = ({cities}) =>
    <table>
        <tr>
            <th> Min</th>
            <th> Max</th>
            <th></th>
        </tr>
        {cities}
    </table>

export const City = (min, max, name) =>
    <tr key={name}>
        <td> {min} </td>
        <td> {max} </td>
        <td> {name} </td>
    </tr>