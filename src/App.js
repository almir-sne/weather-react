import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import {City, CityTable} from "./CityTable";

class App extends Component {
    render() {
        let cities1 = [City(18, 27, "Rio de Janeiro"), City(14, 22, "São Paulo")];
        let cities2 = [City(23, 37, "Salvador"), City(5, 14, "Curitiba")];
        return (
            <div className="container">
                <h1 className="text-center"> Previsão do tempo </h1>
                <div className="row">
                    <div className="col-md-offset-4 col-md-4">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Insira aqui o nome da cidade"
                                   aria-describedby="basic-addon2"/>
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

export default App;
