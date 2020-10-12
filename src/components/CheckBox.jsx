import React from 'react';


export default function CheckBox(props){
    return( <div className="form-group">
            <htmlFor for={props.name} className="form-label">
                {props.title}
            </htmlFor>
            <div className="checkbox">
                {props.options.map(option => {
                    return (
                        <label key={option} className="checkbox-inline">
                            <input
                                id = {props.id}
                                name={props.name}
                                onChange={props.handleChange}
                                value={option}
                                type="checkbox" /> {option}
                        </label>
                    );
                })}
            </div>
        </div>
    );

}
