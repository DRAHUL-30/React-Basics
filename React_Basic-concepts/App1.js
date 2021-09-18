import React from "react";

class App1 extends React.Component{
    constructor(){
        super();
        this.state={
            loginState:false,
        }
    }

    handlelog = ()=>{
        if(!this.state.loginState)
        this.setState({loginState: true})
        else
        this.setState({loginState: false})
    }

    render(){
        let condition = this.state.loginState;
        let button;
        if(condition)
        button = <Loginbutton onClick={this.handlelog}/>
        else
        button = <Logoutbutton onClick={this.handlelog}/>

        return(
            <div className="App1">
                <Rahul value={this.state.loginState} />
                {button}
            </div>
        );
    }
}

function Loginbutton(props){
    return <button onClick={props.onClick}>Login</button>
}

function Logoutbutton(props){

    return <button onClick={props.onClick}>Logout</button>
}

function Rahul(props){
    return(
        //ternery operation:
        <h1>{props.value? "Please log in": "Welcome"}</h1>
    )
}

export default App1;