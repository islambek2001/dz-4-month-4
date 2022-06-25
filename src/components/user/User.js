import React from "react";
import classes from "./user.module.css";




class User extends React.Component {

    constructor () {
        super()
        this.state = {name: "",surname: "", age: 0, address: 0}
    }

    handleInput = (e) => {
        console.log(e)
        this.setState({
                ...this.state,
                [e.target.name]: e.target.value

        }
        )

    }


    onSubmit = () => {
        const data = {
            name: this.state.name,
            surname: this.state.surname,
            age: this.state.age,
            address: this.state.address
        }
        console.log(data)

    }

    render() {
        return (
            <div>
                <h1 className={classes.title}>ФОРМА</h1>
                <input
                    type="text"
                    onChange={this.handleInput}
                    name="name"
                />


                <input
                    type="text"
                    onChange={this.handleInput}
                    name="surname"
                />

                <input
                    type="number"
                    onChange={this.handleInput}
                    name="age"
                />

                <input
                    type="number"
                    onChange={this.handleInput}
                    name="address"
                />

                <button onClick={this.onSubmit}>ПУСК</button>
            </div>
        )
    }
}


const obj = {
    name: "data",
    age: 21
}

console.log(obj[ "age"])

export default User;