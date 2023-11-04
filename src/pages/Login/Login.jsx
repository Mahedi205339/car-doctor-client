import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        try {
            const toastId = toast.loading('Logging In...')
            await signIn(email, password)
                .then(result => {
                    const loggedInUser = result.user;
                    console.log(loggedInUser)
                    const user = { email };
                    toast.success('Logged In', { id: toastId })
                    // get access token
                    axios.post('https://car-doctor-server-jade-psi.vercel.app/jwt', user, { withCredentials: true })
                        .then(res => {
                            console.log(res.data)
                            if (res.data.success) {
                                navigate(location?.state ? location.state : '/')
                            }
                        })
                        .catch(error => console.error(error.message))
                })
        }

        catch (err) {
            toast.error(err.message)
        }


    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <h1 className="text-3xl text-center font-bold">Login </h1>
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
                            <input className="btn bg-orange-500 text-white hover:text-orange-500" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center mb-5'>New to Cars Doctor <Link to="/signup" className='text-orange-500 font-bold'> Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;