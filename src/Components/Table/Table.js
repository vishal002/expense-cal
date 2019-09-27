import React from 'react';


class Table extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
        this.getDataFromStorage = this.getDataFromStorage.bind(this);
    }

    componentDidMount(){

        setInterval(this.getDataFromStorage, 100);
    }

    getDataFromStorage(){
        if(localStorage.getItem('data')){
            this.setState(JSON.parse(localStorage.getItem('data')));
        }
    }

    render(){
        const dataFromState = Object.values(this.state);
        let total_credited = 0, total_debited = 0;
        const renderRow = function(key, value){
            total_debited = (key.type === 'debited') ? (total_debited + parseInt(key.amount)) : total_debited;
            total_credited = (key.type === 'credited') ? (total_credited + parseInt(key.amount)) : total_credited;

            return (
                <tr key={ value}>
                    <td className={key.type === 'debited'?"debited-color" :"credited-color"}>{ value +1 }</td>
                    <td>{ key.date }</td>
                    <td>{ key.itinerary }</td>
                    <td>{ key.amount }</td>
                </tr>
            );
        };

        return(
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Itinerary</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataFromState.map(renderRow)}
                    </tbody>
                    <tfoot>
                        <tr className="text-center">
                            <td colSpan="4" >
                                <span >T. Credited &#8377;<b>{total_credited}</b></span>    |    <span >T. Debited &#8377;<b>{total_debited}</b></span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default Table;