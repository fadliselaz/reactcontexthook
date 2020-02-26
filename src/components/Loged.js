import React, { Component } from 'react';
import AuthContextProvider, { AuthContext } from '../contexts/AuthContext';

class Loged extends Component {
    render() {
        return (
            <AuthContext.Consumer>{(authContext) => {
                const { toggleAuth } = authContext
                return (
                    <>
                        <button onClick={toggleAuth}>
                            login-out
                        </button>
                    </>
                )
            }}

            </AuthContext.Consumer>

        );
    }
}

export default Loged;