import './signup.css';

function Signup() {
    return (
        <div className="container">
            <section className='section-logo'>
                <div className='logo-title'>
                    <h1>DOCTORS APPOINTMENT</h1>
                    <span className='line' />
                </div>
                <div className='logo-text'>
                    <p>The leading online booking website 
                        for doctors all around the world</p>
                </div>

            </section>
            <section className='section-form'>
                <div className='form-title'>
                    <h2>Create an account</h2>
                </div>

                <div className='form-container'>
                <form className='signup-form'>
                    <div className='form-group'>
                        <label>Full Name</label>
                        <input type="text" name="name" id="signup-name" className='form-control' placeholder='Enter your name' required />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type="text" name="email" id="signup-email" className='form-control' placeholder='Enter your email' required />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" name="password" id="signup-password" className='form-control' placeholder='Enter your password' required />
                    </div>
                    <div className='form-group'>
                        <label>Confirm password</label>
                        <input type="password" name="password" id="confirm-password" className='form-control' placeholder='Confirm your password' required />
                    </div>
                </form>

                <div className='signup-buttons'>
                    <button id='signup-btn'>SIGN UP</button>
                    <button id='signup-login-btn'>LOGIN</button>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Signup;
