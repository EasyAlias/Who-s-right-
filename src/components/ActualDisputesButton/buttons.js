import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./buttons.css";

class ActualDisputesButton extends Component {
    render() {
        return (
        <section>
        <div>
            <Link to={`/current_disputes`} className="all-button">
                Текущие споры
            </Link>
        </div>
        </section>
        );
    }
}

export default ActualDisputesButton;
