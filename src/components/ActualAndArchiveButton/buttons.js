import React, { Component } from 'react';
import './buttons.css';

class ActualAndArchiveButton extends Component {
    render() { 
        return (
           <section>
               <div>
                   <button>
                       Перейти к текущим спорам
                   </button>
               </div>
               <div>
                   <button>
                       Перейти в архив
                   </button>
               </div>
           </section>
        );
    }
}
 
export default ActualAndArchiveButton;