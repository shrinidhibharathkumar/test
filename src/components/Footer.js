
import { Component } from "react";
export class Footer extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {brand:"nike", price:"3000"};
        //If you write the handleClick as a normal fuction the below line is compulsory
        this.handleClick = this.handleClick.bind(this);
        //If you write the handleClick as a arrow fuction the above line is not required

    }

    handleClick = () =>
    {
        this.setState({
            brand:"Adidas",
            price: "5000"
        });
    }
    render()
    {
        return(
            <div>
                <h1>I am {this.props.personName} and my age is {this.props.age} - {this.props.name} </h1>
                <h1>I have a {this.state.brand} and its cost is {this.state.price}</h1>
                <button onClick={this.handleClick}>Change state</button>
            </div>
        )
    }
}

Footer.defaultProps = {
    name: "Not given"
};