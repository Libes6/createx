import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

interface Iservices{
    img:string
    title:string
    description:string
}
const ServicesItem:FC<Iservices> = ({img,title,description}) => {

    const navigate =useNavigate()
    const onNavigate=()=>{
        navigate('/Services/Disign')
    }
    return (
        <div className='services-cart'>
            <div className='services-cart__img'>
                <img src={img} alt='' />
            </div>
<div className="services-cart__text">
    <p>{title}</p>
    <p>{description}</p>
    <button onClick={()=>onNavigate()} className='btn btn-outline-primary'>Learn more</button>
</div>

        </div>
    );
};

export default ServicesItem;
