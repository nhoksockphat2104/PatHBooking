import React, { useState } from 'react'
import axios from 'axios';
import Load from '../../components/Load';
import Error from '../../components/Error';
import Success from '../../components/Success';


function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    async function signup() {
        // eslint-disable-next-line eqeqeq
        if (password == confirmpassword) {
            const user = {
                name,
                email,
                password,
                confirmpassword
            };

            try {
                setLoading(true);
                // eslint-disable-next-line no-unused-vars
                const result = (await axios.post('/api/users/signup', user)).data;
                setSuccess(true)
                setError(false)

                setName('')
                setEmail('')
                setPassword('')
                setConfirmpassword('')

            } catch (error) {
                console.log(error)
                setError(true)
                setSuccess(false)
            } finally {
                setLoading(false);
            }
        }
        else {
            alert('Password not match! Please try again.')
        }
    }

    return (
        <div>
            <div className="row-signup justify-content-center mt-5">
                {loading && (<Load />)}
                <div className="col-md-5 form-signup">
                {error && (<Error message={'Something is wrong. Please try again!'} />)}
                {success && (<Success message={'Sign up success'} />)}
                    <div className='wrap-form'>
                        <h2>Sign Up</h2>
                        <input type="text" className='form-control' placeholder='Name'
                            value={name} onChange={(e) => { setName(e.target.value) }} />
                        <input type="email" className='form-control' placeholder='Enter your email'
                            value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="password" className='form-control' placeholder='Enter your password'
                            value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <input type="password" className='form-control' placeholder='Confirm your password'
                            value={confirmpassword} onChange={(e) => { setConfirmpassword(e.target.value) }} />
                        <button className='btn-signup mt-3 px-5' onClick={signup}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SignupPage