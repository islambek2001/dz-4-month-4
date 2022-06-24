import React from "react";
import classes from "./contactsPage.module.css"
import User from "../../components/user/User";



class ContactsPage extends React.Component {

    constructor (props) {
        super(props)
        this.state = {menu: false}
    }


    handleMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <div>

                <div>
                    <button onClick={this.handleMenu}>
                        MENU
                    </button>


                    <ul
                        className={this.state.menu === true
                            ?
                            classes.menuOpen
                            :
                            classes.menuClose
                        }>

                        <li>page1</li>
                        <li>page2</li>
                        <li>page3</li>
                        <User/>
                    </ul>




                </div>


            </div>
        )
    }
}

export default ContactsPage;