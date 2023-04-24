import React from 'react';
import { BsFacebook, BsLinkedin, BsTwitter,  } from 'react-icons/bs';

const HomeSocial = () => {
    return (
        <div className='mt-8 flex'>
            <p className='mr-3 text-blue-500'><a  href="#facebook"> <BsFacebook /></a></p>
            <p className='mr-3 text-blue-500'><a href="#facebook"> <BsTwitter /></a> </p>
            <p className='mb-3 text-blue-500'><a href="#facebook"> <BsLinkedin /></a> </p>
        </div>
    );
};

export default HomeSocial;