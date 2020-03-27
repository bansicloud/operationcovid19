import React, { useState, useContext, useEffect } from 'react';
import { Step, CheckboxList } from '../Components';
import { store } from '../store';

export const HouseMates = (props) => {
    const [houseMates, setHouseMates] = useState(null);
    const { dispatch } = useContext(store);
    const options = [
        { title: "Yes, everyone", value: "everyone" },
        { title: "Yes, but not everyone", value: "some" },
        { title: "No", value: "none" },
        { title: "Too soon to say", value: "too soon" }
    ];

    useEffect(() => {
        dispatch({ type: 'ILL_HOUSEMATES', payload: houseMates });
    }, [houseMates]);

    return (
        <Step showNext={houseMates !== null && houseMates.length > 0} onNext={(n) => props.onNext(n)} step={props.step}>
            <CheckboxList question="Have any others you live with fallen ill with suspected Covid-19" options={options} type="radio" value={houseMates} setValue={setHouseMates} />
        </Step>
    )
}