import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import logo from './logo.svg';
import './App.css';


class App extends Component {




    render() {

        const responseFacebook = (response) => {
            console.log("facebook console");
            console.log(response);
            //this.register(response, 'facebook');
        }

        const responseGoogle = (response) => {
            console.log("google console");
            console.log(response);
            //this.register(response, 'google');
        }

        const responseErrorGoogle = (response) => {
            console.log("google console Error-->",response);
            console.log(response);
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />


                    <div className="row body">
                        <div className="medium-12 columns">
                            <div className="medium-12 columns">
                                <h2 id="welcomeText"></h2>
                                <FacebookLogin
                                    appId="2252344838182008"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={responseFacebook}/>
                                <br/><br/>

                                <GoogleLogin
                                    clientId="168115162907-kuh5bapuf462rc42bspsr9pbt95r7ccs.apps.googleusercontent.com"
                                    buttonText="Login with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseErrorGoogle}/>

                            </div>
                        </div>
                    </div>
                    <p>
                        <strong><u>Coding Challenge</u></strong> <br/>

                        <strong>Objective</strong><br/>

                        1. Implement a webapp and enable 'Login with third party like Facebook/gmail'<br/>

                        2. Store the profile information to a database<br/>

                        <strong>Assumptions</strong>  <br/>

                        1. Webapp does not have to be fancy, Focus is on the integration<br/>

                        2. Database table does not have to be normalized<br/>

                        3. Use the programming language you are comfortable with<br/>

                        4. Use any database provider<br/>

                        5. Originality of code is very important!<br/>
                    </p>




                    <a
                        className="App-link"
                        href="https://github.com/amitdoshi/social-login-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github Link
                    </a>
                </header>
            </div>
        );
    }


}
export default App;
