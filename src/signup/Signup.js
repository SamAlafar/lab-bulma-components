import React from 'react';
import 'bulma/css/bulma.css';
import './Signup.css';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/Formfield';
import CoolButton from '../coolbutton/CoolButton';

const Signup = () => {
    return (
    <>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
    </>
    )
};

export default Signup;