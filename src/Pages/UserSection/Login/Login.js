import React, { useContext } from 'react';
import loginImg from '../../../assets/images/login/login.svg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {emailSignIn} = useContext(AuthContext);

    const handleEmailSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        //console.log(email, password);
        emailSignIn(email, password)
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-1/2">
                    <form onSubmit={handleEmailSignIn} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary text-orange-600"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;