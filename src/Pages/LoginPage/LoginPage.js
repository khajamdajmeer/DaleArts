import React, { useEffect, useState } from 'react';
import { auth } from '../../FireBaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';


const LoginPage = () => {

    const [passwordtype, setPasswordType] = useState('password');
    const PasswordVisibility = () => {
        if (passwordtype === 'password') {
            setPasswordType('text')
        }
        else {
            setPasswordType('password')
        }
    }

    const [UserInput, setUserInput] = useState({ email: '', password: '' });
    const UserInputOnChange = (e) => {
        setUserInput({ ...UserInput, [e.target.name]: e.target.value });
    }
const [message,setMessage]=useState('')
    const HandleSignin= (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,UserInput.email,UserInput.password).then(
            (usercred)=>{console.log(usercred.user.accessToken,usercred.user.email)
            localStorage.setItem('authToken',usercred.user.accessToken);
            localStorage.setItem('email',usercred.user.email);
            }
        )
        .catch(()=>{
            setMessage('Invalid Credentials  Please  Try Again')
            setTimeout(()=>{
                setMessage('')
            },5000)
        })

    }

    
    const history = useNavigate()

    //useEffect to navigate to homepage if already logged in
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                history('/')
            }
            else{
            }
        });
        // eslint-disable-next-line
    },[])

    return (
        <>
            <div className="Login-container-div">
                <div className="Login-Form">
                    <h2 className='LoginHeading'>Login</h2>
                    <div className="Form">
                        <div className="Form-input">
                            <label htmlFor="Email">Email</label>
                            <div className="Password">
                                <input type="text" name='email' value={UserInput.email} onChange={UserInputOnChange} placeholder='Enter Email' />
                            </div>
                            <div style={{color:'#e5383b',fontSize:'16px'}}>{message}</div>
                        </div>
                        <div className="Form-input Form-Password">
                            <label htmlFor="Email">Password</label>
                            <div className="Password" >
                                <input type={passwordtype} name='password' value={UserInput.password} onChange={UserInputOnChange} placeholder='Enter Password'/>
                                <button onClick={PasswordVisibility}>
                                    <span class="material-symbols-outlined">{passwordtype === 'password' ? 'visibility' : 'visibility_off'}</span>
                                </button>
                            </div>
                            <h4 className='notUser'>Not a Member? <Link to='/signup'>Sign Up</Link></h4>
                        </div>
                        <div className="Form-input">
                            <button className="Signin" onClick={HandleSignin}>Login</button>
                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
