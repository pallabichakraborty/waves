import React from 'react';

import Button from '../utils/button';
import Login from '../login_register/login';

const loginRegister = () => {
    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Customer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros lorem, tincidunt id cursus vitae, suscipit eu ipsum. Aenean sagittis, magna at faucibus lobortis, neque lorem imperdiet odio, at mollis enim felis nec orci. Sed vel sodales velit. Maecenas porta sit amet ligula condimentum viverra. Fusce sit amet sem congue eros convallis venenatis. Donec ligula elit, eleifend quis erat eu, consequat ultricies ante. Pellentesque in dignissim turpis. Nullam eget dolor elit. Ut gravida ultrices lacus, in tempus ligula interdum nec. Mauris nec dapibus metus. Etiam nec arcu risus. Donec eleifend urna eu sollicitudin ultricies. Mauris tempor dignissim nunc laoreet accumsan. Fusce vitae luctus felis. Curabitur pharetra in nisl vel aliquam. Cras a urna cursus enim eleifend dictum ut at dolor.</p>
                        <Button
                            type="default"
                            title="Create an account"
                            linkTo="/register"
                            addStyles={{
                                margin: '10px 0 0 0'
                            }}
                        />
                    </div>
                    <div className="right">
                        <h2>Registered Customers</h2>
                        <p>If you have an account, please log in.</p>
                        <Login/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default loginRegister;