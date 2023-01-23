import React, {FC, HTMLInputTypeAttribute} from 'react';

interface IInputProps{
    text:string
    type:HTMLInputTypeAttribute|'textarea'
    size:"small"|"large"|"medium"
}
const InputCustom:FC<IInputProps> = ({text,type,size}) => {
    return (
        <div className={`${type=='checkbox'?'input-container-checkbox':'input-container '}`}>
            <label htmlFor="">{text}</label>
            {type=='textarea'? <textarea   />: <input type={type}/>}

        </div>
    );
};

export default InputCustom;
