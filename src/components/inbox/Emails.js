import { useEffect, useState } from "react";

let emailrecieved = []
const Emails = () =>{
    const [emails,setEmails] = useState(emailrecieved)
    let email ='xyz@gmail.com';
    email = email.replace('.','');
    email = email.replace('@','');
    let id = localStorage.getItem(email)
    useEffect(()=>{
       fetch(`https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/${email}/${id}.json`)
       .then(res=>{
        if(res.ok){
            res.json().then(data=>{
                console.log(data)
                setEmails((pre)=>[data,...pre])
            })
        }
       })
    },[])
    return (emails.map((item)=>{
            return (<section>
                <h3>{item.subject}</h3>
           <p>{item.text}</p>
           </section>
            )
            }) 
    )
}

export default Emails;