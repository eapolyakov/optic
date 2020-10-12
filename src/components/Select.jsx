import React from 'react';


export default function Select(props) {
    return(<div className="form-group">
        <htmlFor for={props.name}>
            {props.title}
        </htmlFor>
        <select
            id = {props.id}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            className="form-control">
            <option value="" disabled>{props.placeholder}</option>
            {props.options.map(option => {
                return (
                    <option
                        key={option}
                        value={option}
                        label={option}>{option}</option>
                );
            })}
        </select>
    </div>)
}