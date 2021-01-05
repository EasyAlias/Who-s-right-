import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { addNewId } from "./../../redux/action";
import './ArchivePage.css';

class ArchivePage extends Component{
    state = {
    }
    
    render(){
        return( 
            <section className="all-archive">
                Тут в обозримом будущем будет архив споров.
                <Link 
                // onClick={() => this.props.dispatch(addNewId())}
                to={`/current_disputes/new_dispute`}className="all-button"
                >Добавить спор
                </Link>
                <Link 
                to={`/current_disputes`} className="all-button"
                >Текущие споры 
                </Link> 
            </section>
        )
    }
}

export default 
// connect(state => ({disputeId: state.disputeId})) 
(ArchivePage);