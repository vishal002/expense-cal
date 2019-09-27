import React from 'react';


class Inputbox extends React.Component{

    render(){
        return(
            <div className="form-group">
                <input type="text" className="form-control"
                       name={this.props.name}
                       placeholder={this.props.placeholder}
                       onChange={(event)=> this.props.onChange(event)} />
            </div>
        )
    }
}

export default Inputbox;