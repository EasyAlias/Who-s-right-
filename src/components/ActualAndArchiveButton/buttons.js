import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './buttons.css';

class ActualAndArchiveButton extends Component {
    render() { 
        return (
           <section>
               <div>
               <Link 
                    to={`/current_disputes`}
                    className="all-button">
                       Перейти к текущим спорам
                </Link>
               </div>
               <div>
               <Link 
                    to={`/archive`}
                    className="all-button">
                       Перейти в архив
                </Link>
               </div>
           </section>
        );
    }
}
 
export default ActualAndArchiveButton;