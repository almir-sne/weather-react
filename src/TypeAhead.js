import React from 'react';
import {AsyncTypeahead} from "react-bootstrap-typeahead"

export const TypeAhead = ({isLoading, onChange, onSearch, options}) =>
    <div className="input-group">
        <AsyncTypeahead
            placeholder="Insira aqui o nome da cidade"
            isLoading={isLoading}
            onChange={onChange}
            labelKey={option => `${option.name} ${option.country.code}`}
            onSearch={onSearch}
            options={options}
        />
        <span className="input-group-addon"> <i className="fa fa-search"/> </span>
    </div>