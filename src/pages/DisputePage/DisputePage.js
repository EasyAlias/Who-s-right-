import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './DisputePage.css';

class DisputePage extends Component{
    state = {
        oneDispute:[],
    }
    componentDidMount() {
        const {id} = this.props.match.params;
        fetch(`http://localhost:5000/dispute/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({ 
                oneDispute: data,
                })         
            })
    }    
    render(){
        return( 
            <section className="all-disputes">
                <ul>
                {/* {this.state.oneDispute.map((el) => { */}
                    {/* return (                         */}
                        <li className="dispute-page_list" key={this.state.id}>
                            <div>
                                <h1>Time:{this.state.timeDispute}</h1>
                                <h3>{this.state.questionDispure}</h3>
                                <h5>{this.state.nameUser1}</h5>
                                <p>{this.state.answerUser1}</p>
                                <button>Я за {this.state.nameUser1}</button>
                                <h5>{this.state.nameUser2}</h5>
                                <p>{this.state.answerUser2}</p>
                                <button>Я за {this.state.nameUser2}</button>
                            </div>
                        </li>
                {/* ) */}
                </ul>
                <Link 
                to={`/current_disputes/${this.state.id}`}className="all-button"
                >Добавить спор
                </Link>
                <Link 
                    to={`/archive`} 
                    className="first-page__archive-button all-button"
                    >Перейти в архив
                    </Link>         
            </section>
        )
    }
}

export default connect(state => ({dispute: state.dispute}))(DisputePage);