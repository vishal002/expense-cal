import React from 'react';

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            type: '', itinerary: '', amount: '', date: ''
        };
        this.handleClear = this.handleClear.bind(this);
    }

    handleClick(type){
        if(this.refs.Amount.value && this.refs.Itinerary.value) {
            if (type === 'debited') {
                this.setState({
                    type: 'debited'
                }, () => this.pushDataToStorage());
            }
            if (type === 'credited') {
                this.setState({
                    type: 'credited'
                }, () => this.pushDataToStorage());
            }
        } else {
            alert("Enter Itinerary & Amount");
        }
    }

    handleChange(e){
        let currentDate = (new Date()).toISOString().substr(0, 10);

        if(e.target.name === 'Itinerary'){
            this.setState({
                itinerary: e.target.value
            });
        }
        if(e.target.name === 'Amount'){
            this.setState({
                amount: e.target.value
            });
        }
        if(e.target.name === 'Date'){
            this.setState({
                date: e.target.value //"2019-09-24"
            });
        } else {
            this.setState({
                date: currentDate
            });
        }

    }

    handleClear(){
        this.refs.Itinerary.value = '';
        this.refs.Amount.value = '';
        this.refs.Date.value = '';
        this.setState({type: '', itinerary: '', amount: '', date: ''});
    }

    pushDataToStorage(){
        let existingData, arr=[];
        if(localStorage.getItem('data')){
            existingData = JSON.parse(localStorage.getItem('data'));
            existingData.push(this.state);
            localStorage.setItem('data', JSON.stringify([...existingData]));
        } else {
            arr.push(this.state);
            localStorage.setItem('data', JSON.stringify(arr));
        }
        this.handleClear();
    }


    render(){
        return(
            <form className="dashboard">
                <div className="form-group">
                    <input type="text" className="form-control"
                           name="Itinerary"
                           ref="Itinerary"
                           placeholder="Enter Itinerary**"
                           onChange={(event)=> this.handleChange(event)} />
                </div>
                <div className="col-xs-6 form-group date-input-box">
                        <input type="date" className="form-control"
                               name="Date" ref="Date" placeholder="Select Date"
                               onChange={(e)=> this.handleChange(e)} />
                </div>

                <div className="col-xs-6 form-group amount-input-box">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon2"><b>&#8377;</b></span>
                        <input type="number" className="form-control" aria-describedby="basic-addon2"
                               name="Amount" ref="Amount" placeholder="Amount**"
                               onChange={(e)=> this.handleChange(e)} />
                    </div>
                </div>

                <div className="btn-group btn-group-justified" role="group">
                    <div className="btn-group" role="group">
                        <button type="button"
                                className="btn btn-warning"
                                onClick={()=>this.handleClick('debited')} >
                            <span className="glyphicon glyphicon-alert"></span> Debited
                        </button>
                    </div>
                    <div className="btn-group" role="group">
                        <button type="button"
                                className="btn btn-info"
                                onClick={()=>this.handleClick('credited')} >
                            <span className="glyphicon glyphicon-piggy-bank"></span> Credited
                        </button>
                    </div>
                </div>
                {/*<button type="button"*/}
                        {/*className="btn btn-default btn-sm btn-block"*/}
                        {/*onClick={()=>this.handleClear()} >*/}
                       {/*<i className="glyphicon glyphicon-console"></i> Cancel*/}
                {/*</button>*/}
            </form>
        )
    }

}

export default Dashboard;