import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isInputValid,setValide]=useState(true);


  

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(event.target.value.trim().length>0){
      setValide(true);}
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setValide(false);
      return;
    }
    //setValide(true);
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isInputValid? 'invalid':''}`} >
       <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}/>
        {/* <label style={{color:isInputValid? 'black':'red'}}>Course Goal</label>
        <input type="text" style={{backgroundColor:isInputValid? 'transparent':'salmon',borderColor:isInputValid? 'black':'red'}} onChange={goalInputChangeHandler} /> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
