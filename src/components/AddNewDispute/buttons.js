import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./buttons.css";

class AddNewDispute extends Component {
    render() {
        return (
        <section>
            <div>
                <Link 
                to={`/current_disputes/new_dispute`}
                className="all-button"
                >Добавить спор
                </Link>
            </div>
        </section>
        );
    }
}

export default AddNewDispute;
