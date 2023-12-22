import React, { useState } from 'react'
import axios from 'axios';
import Load from '../../components/Load';
import Error from '../../components/Error';

function SigninPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    async function signin() {

        const user = {
            email,
            password,
        }
        console.log('Login successful');
        try {
            setLoading(true);
            // eslint-disable-next-line no-unused-vars
            const result = (await axios.post('/api/users/signin', user)).data
            setLoading(false)
            localStorage.setItem('currentUser', JSON.stringify(result));
            window.location.href = "/homepage";

        } catch (error) {
            console.log(error)
            setLoading(false);
            setError(true)
        }

    }

    return (
        <div>
            {loading && (<Load />)}
            <div className="row-signin justify-content-center mt-5">
                <div className="col-md-5 form-signup">
                    {error && (<Error message='Invalid Credentionals !' />)}
                    <div className='wrap-form'>
                        <h2>Sign In</h2>
                        <input type="email" className='form-control' placeholder='Email'
                            value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="password" className='form-control' placeholder='Password'
                            value={password} onChange={e => setPassword(e.target.value)} />
                        <button className='btn-signin mt-3 px-5' onClick={signin}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SigninPage