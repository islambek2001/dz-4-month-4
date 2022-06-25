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

                    <button onClick={this.handleMenu} className={classes.button}>
                        ПЕРЕЙТИ
                    </button>


                    <ul
                        className={this.state.menu === true
                            ?
                            classes.menuOpen
                            :
                            classes.menuClose
                        }>
                        <User/>
                    </ul>

            </div>
        )
    }
}

export default ContactsPage;