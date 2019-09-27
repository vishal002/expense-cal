import React from 'react';

class Button extends React.Component{

    render(){
        return (
            <button type="button"
                    className={this.props.classType}
                    onClick={()=>this.props.onClick()} >
                    <i className={'glyphicon '+ this.props.icon}></i>
                    {this.props.label}
            </button>
        )
    }

}

export default Button