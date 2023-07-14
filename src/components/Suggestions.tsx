import React from 'react';
import './Suggestions.css';
import {SuggestionsPropsInterface} from '../interfaces/SuggestionsPropsInterface';
import {LocationInterface} from '../interfaces/LocationInterface';

const Suggestions: React.FC<SuggestionsPropsInterface> = (
    {
        locations,
        onSelect
    }
) => {
    return (
        <ul className='list'>
            {locations.map((
                location: LocationInterface,
                index: number
            ) => (
                <li key={location.name + '-' + index}>
                    <button
                        className='item'
                        onClick={() => onSelect(location)}
                    >
                        {location.name}, {location.country}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Suggestions;
