import React, { Component } from 'react';
import FormField from '../utils/Form/formField';
import { update, generateData, isFormValid } from '../utils/Form/formActions';

import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/user_action'

import { Dialog } from '@material-ui/core';

class Register extends Component {

    state = {
        formError: false,
        formSuccess: false,
        formdata: {
            name: {
                element: 'input',
                value: '',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            lastname: {
                element: 'input',
                value: '',
                config: {
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your last name'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            confirmpassword: {
                element: 'input',
                value: '',
                config: {
                    name: 'confirmpassword_input',
                    type: 'password',
                    placeholder: 'Confirm your password'
                },
                validation: {
                    required: true,
                    confirm: 'password'
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }

    updateForm = (elementName, element) => {
        const newFormdata = update(elementName, element, this.state.formdata, 'register');

        this.setState(
            {
                formdata: newFormdata,
                formError: false
            }
        );
    }

    SubmitForm = (event) => {

        event.preventDefault();
        let dataToSubmit = generateData(
            this.state.formdata,
            'register'
        );
        let formIsValid = isFormValid(
            this.state.formdata,
            'register'
        );

        if (formIsValid) {
            console.log(dataToSubmit);
            this.props
                .dispatch(registerUser(dataToSubmit))
                .then(response => {
                    if (response.payload.success) {
                        this.setState(
                            {
                                formError: false,
                                formSuccess: true
                            });
                        setTimeout(() => {
                            this.props.history.push('/login');
                        }, 300);

                    }
                    else {
                        this.setState(
                            {
                                formError: true
                            });
                    }
                })
                .catch(e => {
                    this.setState(
                        {
                            formError: true
                        });
                });
        }
        else {
            this.setState(
                {
                    formError: true
                }
            )
        }


    }


    render() {
        return (
            <div className="page_wrapper">
                <div className="container">
                    <div className="register_login_container">
                        <div className="left">
                            <form onSubmit={(event) => this.SubmitForm(event)}>
                                <h2>Personal Information</h2>
                                <div className="form_block_two">
                                    <div className="block">
                                        <FormField
                                            id={'name'}
                                            formdata={this.state.formdata.name}
                                            change={(element) => this.updateForm('name', element)}
                                        />
                                    </div>
                                    <div className="block">
                                        <FormField
                                            id={'lastname'}
                                            formdata={this.state.formdata.lastname}
                                            change={(element) => this.updateForm('lastname', element)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <FormField
                                        id={'email'}
                                        formdata={this.state.formdata.email}
                                        change={(element) => this.updateForm('email', element)}
                                    />
                                    <h2> Verify Password</h2>
                                    <div className="form_block_two">
                                        <div className="block">
                                            <FormField
                                                id={'password'}
                                                formdata={this.state.formdata.password}
                                                change={(element) => this.updateForm('password', element)}
                                            />
                                        </div>
                                        <div className="block">
                                            <FormField
                                                id={'confirmpassword'}
                                                formdata={this.state.formdata.confirmpassword}
                                                change={(element) => this.updateForm('confirmpassword', element)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button onSubmit={(event) => this.SubmitForm(event)}>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
                {console.log(this.state.formSuccess)}
                <Dialog open={this.state.formSuccess}>
                    <div className="dialog_alert">
                        <div>Cogratulations</div>
                        <div>You will be redirected to Login Page</div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default connect()(Register);