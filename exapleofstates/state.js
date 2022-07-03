import React from 'react';

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand : "ford",
            model : "mustang",
            color : "red",
            year : 1964
        };
    }

    changeColor = ()=>{
        this.setState({color : "blue"}); // setState is used to change the properties on a certain event
        // or u can do
        //this.state.color = "blue";
        //this.setState({}); // but u have to use setState then also otherwise no change will be reflected
        // change reflect sirf tab hi hoga jab aap setState ko call rahe honge
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}

                </p>
                <button type='button' onClick={this.changeColor}>
                    Change Color
                </button>
            </div>
         );
    }
}
 
export default Car;