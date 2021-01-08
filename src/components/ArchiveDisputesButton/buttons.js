import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./buttons.css";

class ArchiveDisputesButton extends Component {
    render() {
        return (
        <section>
        <div>
            <Link to={`/archive`} className="all-button">
                Завершенные споры
            </Link>
        </div>
        </section>
        );
    }
}

export default ArchiveDisputesButton;
