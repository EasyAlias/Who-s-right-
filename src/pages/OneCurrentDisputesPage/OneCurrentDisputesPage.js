import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewId } from "./../../redux/action";
import ActualAndArchiveButton from './../../components/ActualAndArchiveButton/buttons';
import './OneCurrentDisputesPage.css';

class OneCurrentDisputesPage extends Component{
    state = {
        id: this.props.disputeId,
        timeDispute: null,
        questionDispure:"",
        nameUser1: "",
        nameUser2: "",
        answerUser1: "",
        answerUser2: "",
    }

    clickHandler = () => {
        fetch('http://localhost:5000/dispute', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(this.state)  
            }) 
        } 
        
    render(){
        return( 
            <section className="section-disputes">
                <div className="disputes">
                    <div>
                        <input 
                        placeholder="Введите время (кол-во дней)"
                        type="number"
                        onChange={((event) => this.setState({timeDispute: event.target.value}))}/>
                        <input placeholder="Введите тему спора"
                        type="text"
                        onChange={((event) => this.setState({questionDispure: event.target.value}))}/>
                    </div>
                    <hr/>
                    <div>
                        <div>
                            <input placeholder="Введите имя USER1"
                            type="text"
                            onChange={((event) => this.setState({nameUser1: event.target.value}))}/>
                            <input placeholder="Введите точку зрения USER1"
                            type="text"
                            onChange={((event) => this.setState({answerUser1: event.target.value}))}/>
                        </div>
                    <hr/>
                        <div>
                            <input placeholder="Введите имя USER2"
                            type="text"
                            onChange={((event) => this.setState({nameUser2: event.target.value}))}/>
                            <input placeholder="Введите точку зрения USER2"
                            type="text"
                            onChange={((event) => this.setState({answerUser2: event.target.value}))}/>
                        </div>
                    </div>
                    <hr/>
                    <button className="all-button"
                    onClick={this.clickHandler}>Сохранить спор</button>
                </div>
                <hr/>     
                <ActualAndArchiveButton />           
            </section>
        )
    }
}

export default connect(state => ({disputeId: state.disputeId})) (OneCurrentDisputesPage);