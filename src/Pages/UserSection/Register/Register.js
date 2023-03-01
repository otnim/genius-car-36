import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../assets/images/login/login.svg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        //console.log("here me");
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                alert('User registered successfully.');
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const handleGoogleSignUp = event => {
        event.preventDefault();
        const googleProvider = new GoogleAuthProvider();
        googleSignIn(googleProvider)
        .then(result => {
            alert('Success');
        })

    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-1/2">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-primary text-orange-600" />
                        </div>
                        <label className="label">
                            <h1>Already have an account? <Link to="/login" className="label-text-alt link link-hover text-orange-600">Login</Link></h1>
                        </label>
                    </form>

                    <h1 className='text-center'> Or Sign Up with </h1>
                    <button onClick={handleGoogleSignUp} className="btn btn-outline btn-success"> Google </button>
                </div>
            </div>
        </div>
    );
};

export default Register;