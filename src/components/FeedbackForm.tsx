import React, {FC} from 'react';
import InputCustom from './InputCustom';

const FeedbackForm:FC = () => {
    return (
        <section className='feedback-section'>
            <div className="container feedback-section__container">

                <form className='form-feedback' action="">
                    <h3 className='title-small text-center'>A quick way to discuss details</h3>
                    <InputCustom text={'Name*'} size={'small'} type={'text'}/>
                    <InputCustom text={'Phone*'} size={'small'} type={'tel'}/>
                    <InputCustom text={'Email'} size={'small'} type={'email'}/>
                    <InputCustom text={'Message*'} size={'small'} type={'textarea'}/>

                    <div className='input-item'>
                        <InputCustom text={''} size={'small'} type={'checkbox'}/>
                        <p>I agree to receive communications from Createx Construction Bureau.</p>
                    </div>
                    <div className='block-center'>
                        <button className='btn btn-primary block-center'>send request</button>
                    </div>


                </form>
            </div>
        </section>
    );
};

export default FeedbackForm;
