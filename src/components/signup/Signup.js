import './Signup.css'
import { useRef, useState } from "react"


const Signup = () =>{
    const [isLogin,setIsLogin] = useState(true)
    let email = useRef();
    let password = useRef();
    let confirmPassword = useRef();
   
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
            }else{
                alert('Invalid data !!! please try again')
            }
        })
    }

    return <div className="container">
            <h2>{isLogin ? "Sign Up Form" : 'Sign In Form'}</h2>
            <form onSubmit={signupHandler} className="signup-form">
                <label>Email Id</label>
                <input type="email" ref={email}></input><br/>
                <label>Password</label>
                <input type="password" ref={password}></input><br/>
                {isLogin && <label>Confirm Password</label>}
                {isLogin && <input type="password" ref={confirmPassword}></input>}<br/>
                {isLogin && <button type="Submit" >Sign Up</button>}
                {!isLogin &&<button type="Submit" >Sign In</button>}
            </form>
            <br/><br/><br/>
            <button onClick={switchHandler} className='additional'>{isLogin ? 'Already Registered!!! Sign In' : "Don't have an account? Sign Up" }</button>
    </div>
}

export default Signup