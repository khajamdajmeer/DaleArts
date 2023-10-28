import React,{useState} from 'react';
import './SignUpPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../FireBaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth'
const SignUpPage = () => {


    //Visibility of the Password
    const [passwordtype, setPasswordType] = useState('password');
    //function to change visibility of password
    const PasswordVisibility = () => {
        if (passwordtype === 'password') {
            setPasswordType('text')
        }
        else {
            setPasswordType('password')
        }
    }
    //Intializing Input Data Variable 
    const [Input,setInput] = useState({name:'',email:'',password:'',repassword:''});
    //Handling Input  Data Change
    const UserInputOnChange=(e)=>{
        setInput({...Input,[e.target.name]:e.target.value});
    }


    const history = useNavigate();

    //Intializing Message Variable

    const [message,setMessage]=useState('')
    //Handling Signup Action
    const HandleSignUP= (e)=>{
        e.preventDefault();

            createUserWithEmailAndPassword(auth,Input.email,Input.password).then(()=>{
                setMessage('Account Created Successfully!');
                setTimeout(()=>{
                    history('/login')
                },3000)
                setInput({...Input,[e.target.name]:''})
            }
            )
            .catch((error)=>{
                const ak= error.code.slice(5)
                setMessage(ak)
                console.log(error)
            })
       

    }

  return (
    <>
      <div className="signup-container-div">
        <div className="signup-form">
            <h2 className='signup-heading'>Sign Up</h2>
            
            <div style={{color:'red',textTransform:'capitalize'}}>{message}</div>
            <div className="form-input">
                <label htmlFor="Name">Email</label>
                <input type="text" onChange={UserInputOnChange} name='email' value={Input.email} placeholder='exmple@mail.com' />
            </div>
            <div className="form-input">
                <label htmlFor="Name">Password</label>
                <div className="Password" >
                                <input type={passwordtype} name='password' value={Input.password} onChange={UserInputOnChange} placeholder='Enter Password'/>
                                <button onClick={PasswordVisibility}>
                                    <span class="material-symbols-outlined">{passwordtype === 'password' ? 'visibility' : 'visibility_off'}</span>
                                </button>
                            </div>
            </div>
            <div className="form-input">
                <label htmlFor="Name" style={{color:`${Input.password!==Input.repassword ? 'red':'black'}`}}>Re-Enter Password</label>
                <input type={passwordtype} onChange={UserInputOnChange} name='repassword' value={Input.repassword}  placeholder='Re Enter Password'/>
                <h4 className='notUser' > <Link to='/login'>Login</Link></h4>
            </div>
            <div className="form-input">
            <button className='Signin' onClick={HandleSignUP} disabled={Input.password!==Input.repassword}>Sign Up</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
