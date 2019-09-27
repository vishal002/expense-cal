import React from 'react';
import Button from './../Components/Button/Button';
import Inputbox from './../Components/Inputbox/Inputbox';


class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            type: '', itinerary: '', amount: ''
        };
    }

    handleClick(type){
        if(type === 'debited'){
            this.setState({
                type: 'debited'
            },()=> this.pushDataInDB());
        }
        if(type === 'credited'){
            this.setState({
                type: 'credited'
            },()=>this.pushDataInDB());
        }

        this.refs.Itinerary.value = '';
    }

    handleChange(e){
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
    }

    pushDataInDB(){
        console.log(this.state);
    }


    render(){
        return(
            <div className="dashboard">
                <Inputbox name={"Itinerary"}
                          placeholder={"Enter Itinerary"}
                          onChange={(e)=> this.handleChange(e)} />
                <Inputbox name={"Amount"}
                          placeholder={"Enter Amount"}
                          onChange={(e)=> this.handleChange(e)} />

                <div className="btn-group btn-group-justified" role="group">
                    <div className="btn-group" role="group">
                        <Button classType={"btn btn-warning"} label={"Debited"} icon={"glyphicon-alert"}
                                onClick={()=>this.handleClick('debited')} />
                    </div>
                    <div className="btn-group" role="group">
                        <Button classType={"btn btn-info"} label={"Credited"} icon={"glyphicon-piggy-bank"}
                                onClick={()=>this.handleClick('credited')} />
                    </div>
                </div>
                {/*<Button classType={"btn btn-default btn-sm btn-block"} label={"Cancel"} icon={"glyphicon-console"} onClick={()=>this.handleClick('cancel')} />*/}
            </div>
        )
    }

}

export default Dashboard;