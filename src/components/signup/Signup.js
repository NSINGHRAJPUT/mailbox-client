import { useNavigate } from 'react-router-dom';
import './Signup.css'
import { useRef, useState } from "react"


const Signup = () =>{
    const [isLogin,setIsLogin] = useState(true)
    let email = useRef();
    let password = useRef();
    let confirmPassword = useRef();
    const nav = useNavigate();
   
    const switchHandler = (e) =>{
        e.preventDefault();
        setIsLogin(!isLogin);
    }

    const signupHandler = (e) =>{
        e.preventDefault();
        let url;
        if(isLogin){
            if(password.current.value !== confirmPassword.current.value){
                alert('Password and confirm password must be same')
            }else{
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6twBfYeAK7PmDAUWyQUGA-ph0S-Qjnq4';
            }
        }else{
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6twBfYeAK7PmDAUWyQUGA-ph0S-Qjnq4'
        }
        let obj={email:email.current.value,password:password.current.value,returnSecureToken:true}
        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(obj),
                headers : {
                        'Content-Type' : 'application/json'
                }
            }
        ).then(res=>{
            if(res.ok){
                res.json().then(data=>{     
                    console.log('Sign Up Successfull')})
                    nav('/userhome')
            }else{
                alert('Invalid data !!! please try again')
            }
        })
    }

    return <div className="container">
            <h2>{isLogin ? "Sign Up Form" : 'Sign In Form'}</h2>
            <div className='app'>
            <form onSubmit={signupHandler} className="signup-form-tc">
                <div className='form-floating'>
                    <input type="email" ref={email} className='form-control' placeholder='Email here'></input>
                    <label className='form-label'>Email Id</label>
                </div>
                <div className='form-floating'>
                <input type="password" ref={password} placeholder='password' className='form-control'></input>
                <label className='form-label'>Password</label>
                </div>
                {isLogin && <div className='form-floating'>
                <input type="password" ref={confirmPassword} placeholder='confirm password'  className='form-control'></input>
                <label className='form-label'>Confirm Password</label>
                </div>}
                {isLogin && <button type="Submit" className='btn btn-primary '>Sign Up</button>}
                {!isLogin &&<button type="Submit" className='btn btn-primary' >Sign In</button>}
            </form>
            <button onClick={switchHandler} className='btn btn-warning btn-sm'>{isLogin ? 'Already Registered!!! Sign In' : "Don't have an account? Sign Up" }</button>
        </div>
    </div>
}

export default Signup