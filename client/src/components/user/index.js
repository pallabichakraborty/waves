import React from 'react';

import UserLayout from '../hlc/userLayout';
import MyButton from '../utils/button'

const userDashboard = () => {
    return (
        <UserLayout>
            <div>
                <div className="user_nfo_panel">
                    <h1> User Information</h1>
                    <div>
                        <span>name</span>
                        <span>Lastname</span>
                        <span>email</span>
                    </div>
                    <MyButton
                        type="default"
                        title="Edit Account Information"
                        linkTo="/user/user_profile">
                    </MyButton>
                </div>
                <div className="user_nfo_panel">
                    <h1>History Purchases</h1>
                    <div className="user_product_block_wrapper">
                        history
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default userDashboard;