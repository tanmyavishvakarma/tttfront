import React from 'react';
import Input from './Input.js'
import ChoiceButton from './ChoiceButton'

const InputForm = (props) => {
    const {stepBack, onSubmit, onTyping, newGame, name, room} = props
    

    if (newGame){
        return (
            <div className="input-container">
                <div className='playwith'>
                <label>Start a New Game</label>
           
                <div>Whom do you want to play with?</div>
            
                <label>Email</label>
                </div>
                
                <Input 
                name='name'
                placeholder='Type your Email here'
                onChange = {onTyping}
                value = {name}
                />
                <div className='nav-container'>
                    <ChoiceButton type='nav-back' choice='back' onChoice={stepBack} label='Back'/>
                    <ChoiceButton type='nav-forward' choice='submit' onChoice={onSubmit} label="Start Game"/>
                </div>
            </div>
        );
    }else{
        return (
            <div className="input-container">
                 <Input 
                name='room'
                placeholder='Room ID...'
                onChange = {onTyping}
                value = {room}
                />
                <Input 
               
                name='name'
                placeholder='Your Email...'
                onChange = {onTyping}
                value = {name}
                />
               
                <div className='nav-container'>
                    <ChoiceButton type='nav-back' choice='back' onChoice={stepBack} label='Back'/>
                    <ChoiceButton type='nav-forward' choice='submit' onChoice={onSubmit} label="Let's Go"/>
                    
                </div>
            </div>
        );
    }
    
}

export default InputForm;
