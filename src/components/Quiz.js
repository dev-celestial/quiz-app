import React from 'react'
import Questions from './Questions';
import '../App.css';

export default function Quiz() {

    function onNext(){
        console.log("Next button clicked");
    }

    function onPrev(){
        console.log("Prev button clicked");
    }

  return (
    <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        {/* display questions */}
        <Questions></Questions>
        
    <div className="grid">
        <button className='btn prev' onClick={onPrev} >Prev</button>
        <button className='btn next' onClick={onNext} >Next</button>
    </div>
    </div>
  )
}
