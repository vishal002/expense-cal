import React from 'react';
import '../node_modules/bootstrap3/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Table from './Components/Table/Table';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            status: false
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-offset-4 col-md-4 col-md-offset-4 col-sm-12 col-lg-offset-3 col-lg-6 col-lg-offset-3">
                        <div className="jumbotron custom-jumbotron">
                            <div className="text-center">
                                <h2>EXPANSE <small>WISELY...</small> <i>;)</i>
                                </h2>
                            </div>
                            <Dashboard />
                        </div>
                        <Table/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
