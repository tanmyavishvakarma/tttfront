import React from 'react';
import ChoiceButton from './ChoiceButton'

const Choice = ({logo, onChoice}) => {
    return (
        <>
        <div className='choice-container'>
            <div>async</div>
            <br></br>
            <div>tic tac</div>
            <br></br>
       
            <div>toe</div>
            <br></br>
            
            <ChoiceButton onChoice={onChoice} type='primary' choice='new' label='Start a New Game'/> 
            <ChoiceButton onChoice={onChoice} type='secondary' choice='join' label='Join Game'/> 
        </div>
        </>
    );
}

export default Choice;
