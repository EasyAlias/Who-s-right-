import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ArchivePage.css';

class ArchivePage extends Component{
    state = {
    }
    
    render(){
        return( 
            <section className="all-archive">
                Тут в обозримом будущем будет архив споров.
                <Link 
                to={`/current_disputes/${this.state.id}`}className="all-button"
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

export default ArchivePage;