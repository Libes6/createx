import React, {FC} from 'react';
interface ICart{
    img:any
    description:string
    type?:'view'|'default'
}
const CartItem:FC<ICart> = ({img,description,type}) => {

    return (
        <>{type =='view'
            ? <div className='card-item-view'>

                <img src={img} alt="qw"/>
                <div className='card-item-view__bottom'>
                    <div>
                        <p className='description-large cart-description'>
                            {description}
                        </p>
                        <p className='description-small'>
                            A hut in the city center
                        </p>
                    </div>

                    <button className='btn btn-outline-primary'>View Project</button>
                </div>

            </div>

            : <div className='card-item'>

            <img src={img} alt="qw"/>
            <p className='description-large cart-description'>
                {description}
            </p>
        </div>
        }

        </>

    );
};

export default CartItem;
