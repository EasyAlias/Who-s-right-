import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { addNewId } from "./../../redux/action";
import AddNewDispute from './../../components/AddNewDispute/buttons';
import ActualDisputesButton from '../../components/ActualDisputesButton/buttons';
import './ArchivePage.css';

class ArchivePage extends Component{
    state = {
    }
    
    render(){
        return( 
            <section className="all-archive">
                Тут в обозримом будущем будет архив споров.
                <AddNewDispute />
                <ActualDisputesButton /> 
            </section>
        )
    }
}

export default 
// connect(state => ({disputeId: state.disputeId})) 
(ArchivePage);