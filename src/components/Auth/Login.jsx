import PropTypes from 'prop-types'; // Used for defining type checking for props
import { useState } from 'react'; // useState hook for managing component state

// Login component
const Login = ({ handleLogin }) => {
    // State variables for email and password inputs
    const [email, setEmail] = useState(''); // State to hold the email input value
    const [password, setPassword] = useState(''); // State to hold the password input value

    // Function to handle form submission
    const submitHandler = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        handleLogin(email, password); // Calls the handleLogin function passed as a prop with email and password
        setEmail(''); // Clears the email input field
        setPassword(''); // Clears the password input field
    };
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 rounded-xl border-emerald-600 p-20">
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className="flex flex-col items-center justify-center"
                >
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                        className="outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required
                        className="outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 mt-3 placeholder:text-gray-400"
                        type="password"
                        placeholder="Enter password"
                    />
                    <button className="mt-5 text-white outline-none border-none bg-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-white w-full">
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
};

Login.propTypes = {
    handleLogin: PropTypes.func.isRequired,
};

export default Login;
