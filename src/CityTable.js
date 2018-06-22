import React from 'react';

export const CityTable = ({cities}) =>
    <table>
        <thead>
        <tr>
            <th> Min</th>
            <th> Max</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {cities}
        </tbody>
    </table>

export const City = (min, max, name) =>
    <tr key={name}>
        <td> {min} </td>
        <td> {max} </td>
        <td> {name} </td>
    </tr>