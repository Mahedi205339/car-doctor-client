import { Link} from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUP = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUP = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                
            })
            .catch(error => console.error(error.message))

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUP} className="card-body">
                        <div className="form-control">
                            <h1 className="text-3xl text-center font-bold">Sign UP </h1>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-500 text-white hover:text-orange-500" type="submit" value="SignUP" />
                        </div>
                    </form>
                    <p className='text-center mb-5'>Already have an account <Link to="/login" className='text-orange-500 font-bold'> Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUP;