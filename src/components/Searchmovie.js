 import React, { Component } from "react";
import { link } from "react-router-dom"

class Searchmovie extends Component {
    state = {
        // btngenre:[],
    };

    render() {
        const { genre } = this.props;
        return (
            <div className="btnCenter">
                <ul>
                    <li><link to="Btnssearch/"></link></li>
                </ul>

            </div>
        );
    }
}

export default Searchmovie;