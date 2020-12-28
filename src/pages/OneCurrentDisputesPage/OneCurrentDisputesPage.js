import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ActualAndArchiveButton from './../../components/ActualAndArchiveButton/buttons';
import './OneCurrentDisputesPage.css';

class OneCurrentDisputesPage extends Component{
    state = {
        dispute: [
            {id: 1,
            timeDispute: null,
            nameUser1: "",
            nameUser2: "",
            questionDispure:"",
            answerUser1: "",
            answerUser2: "",
        }]
    }
    
    render(){
        return( 
            <section className="disputes">
                <div>
                    <div>
                        <input placeholder="Введите время"/>
                        <input placeholder="Введите тему спора"/>
                    </div>
                    <hr/>
                    <div>
                        <div>
                            <input placeholder="Введите имя USER1"/>
                            <input placeholder="Введите точку зрения USER1"/>
                        </div>
                    <hr/>
                        <div>
                            <input placeholder="Введите имя USER2"/>
                            <input placeholder="Введите точку зрения USER2"/>
                        </div>
                    </div>
                    <hr/>
                    <button>Сохранить спор</button>
                </div>
                <hr/>     
                <ActualAndArchiveButton />           
            </section>
        )
    }
}

export default OneCurrentDisputesPage;