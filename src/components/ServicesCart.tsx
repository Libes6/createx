import React, {FC, useState} from 'react';
interface Ilist{
    title:string
    descr:string
}
const ServicesCart:FC = () => {
    const [isActive,setIsActive]=useState(0)
    const listItem =[
        {title:'Work Estimate',descr:'Culpa nostrud commodo ea consequat aliquip reprehenderit.'},
        {title:'Contract',descr:'Laoreet ultrices curabitur luctus quisque consequat. Leo lorem velit imperdiet auctor et tempor.'},
        {title:'Mobilization ',descr:'Odio massa scelerisque purus arcu sed velit eleifend cursus leo.'},
        {title:'Construction Work',descr:'Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.'},
    ]
    const onClickCart=(index:number)=>{
        setIsActive(index)
    }
    return (
        <>
            {listItem.map((itm:Ilist,index:number)=>
                <div onClick={()=>onClickCart(index)} className={`list-item list-cart__${isActive==index?'active':''}`}>
                <h2 className="number">0{index+1}</h2>
                <h3 className="title">{itm.title}</h3>
                <p>{itm.descr}</p>
            </div>)}


        </>
    );
};

export default ServicesCart;
