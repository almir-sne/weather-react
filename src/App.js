import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import {CityTable} from "./CityTable";
import {search} from './api'
import {connect} from 'react-redux'
import {CityCard} from './CityCard'
import {TypeAhead} from "./TypeAhead";

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
        if(selected && selected.length > 0) {
            this.props.findByWoeid(selected[0].woeid)
        }
    };

    componentDidMount() {
        this.props.findByList(["Rio de Janeiro", "São Paulo", "Salvador", "Curitiba"]);
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center"> Previsão do tempo </h1>
                <div className="row">
                    <div className="col-sm-offset-3 col-sm-6">
                        <CityCard weather={this.props.weather} onClose={this.props.clear}/>
                        <TypeAhead isLoading={this.state.isLoading} onChange={this.onChange} onSearch={this.onSearch} options={this.state.options}/>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-offset-4">

                        <h2> Capitais </h2>
                        <div className="col-sm-3">
                            <CityTable cities={this.props.cities}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        weather: state.weather,
        cities: state.cities
    }
};

const mapDispatchToProps = dispatch => {
    return {
        findByWoeid: (woeid) => dispatch({type: 'FIND_BY_WOEID', woeid}),
        findByList: (cities) => dispatch({type: 'FIND_BY_LIST', cities}),
        clear: () => dispatch({type: "CLEAR"})
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);