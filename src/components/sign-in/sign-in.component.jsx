import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account.</h2>
                <span>Sign in with your e-mail and password. </span><br /><br />

                <form onSubmit={this.handleSubmit}>
                    <label>E-Mail</label>
                    <FormInput 
                        label='Email'
                        type='email' 
                        name='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <label>Password</label>
                    <FormInput 
                        label='Password'
                        type='password' 
                        name='password' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required 
                    />
                    <CustomButton type='submit'> Sign In </CustomButton>
                </form>
            </div>
        )
    }
};
export default SignIn;