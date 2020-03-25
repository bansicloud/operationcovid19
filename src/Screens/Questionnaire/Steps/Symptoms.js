import React, { useContext, useState } from 'react';
import { QuestionnaireContext } from '../QuestionnaireContext';
import { NextButton } from '../Components';

export const Symptoms = (props) => {
    const step = useContext(QuestionnaireContext);
    const [ symptoms, setSymptoms ] = useState([]);

    const _nextButton = () => {
        if (step == props.step && symptoms !== null) {
            return <NextButton onNext={() => props.onNext()} />
        }
    }

    return (
        <div class="card mb-3">
            <div class="card-body">
                <h3>Do you have any of the following symptoms?</h3>
                
            </div>
            {_nextButton()}
        </div>
    )
}