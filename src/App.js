import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import {City, CityTable} from "./CityTable";
import {AsyncTypeahead} from "react-bootstrap-typeahead"
import {search} from './api'
import {connect} from 'react-redux'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: false};
    }

    onSearch = query => {
        this.setState({isLoading: true});
        search(query).then(response => {
            if (response.status === 200) {
                this.setState({
                    isLoading: false,
                    options: response.data.query.results.place,
                })
            }
        });
    };

    onChange = selected => {
        this.props.findByWoeid(selected[0].woeid)
    };

    render() {
        let cities1 = [City(18, 27, "Rio de Janeiro"), City(14, 22, "São Paulo")];
        let cities2 = [City(23, 37, "Salvador"), City(5, 14, "Curitiba")];
        return (
            <div className="container">
                <h1 className="text-center"> Previsão do tempo </h1>
                <div className="row">
                    <div className="col-md-offset-4 col-md-4">
                        <div className="input-group">
                            <AsyncTypeahead
                                placeholder="Insira aqui o nome da cidade"
                                isLoading={this.state.isLoading}
                                onChange={this.onChange}
                                labelKey={option => `${option.name} ${option.country.code}`}
                                onSearch={this.onSearch}
                                options={this.state.options}
                            />
                            <span className="input-group-addon" id="basic-addon2"> <i className="fa fa-search"/> </span>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-4">

                        <h2> Capitais </h2>
                        <div className="col-md-3">
                            <CityTable cities={cities1}/>
                        </div>
                        <div className="col-md-3">
                            <CityTable cities={cities2}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
};

const mapDispatchToProps = dispatch => {
    return {
        findByWoeid: (woeid) => dispatch({type: 'FIND_BY_WOEID', woeid})
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);