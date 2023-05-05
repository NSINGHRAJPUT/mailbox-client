import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

let emailrecieved = []
const Emails = () =>{
    const [emails,setEmails] = useState(emailrecieved)
    let email = useSelector(state=>state.auth.userEmail)
    email = email.replace('.','');
    email = email.replace('@','');
    let id = localStorage.getItem(email)
    useEffect(()=>{
       fetch(`https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/${email}.json`)
       .then(res=>{
        if(res.ok){
            res.json().then(data=>{
                const receivedMails = [];
                for (const key in data) {
                const mail = {
                    id: key,
                    ...data[key],
                     };
                receivedMails.push(mail);
                setEmails((pre)=>[mail,...pre])
                }
            })
        }
       })
    },[])
    let newMails = emails.filter((item)=>item.isRead===false)

    return (<div>
        <h4>Unread Mails {newMails.length}</h4>
        {emails.map((item)=>{
            return (<ul>
                <li><h3>{item.subject}</h3></li>
                <p>{item.text}</p>
           </ul>
            )
            }) 
    }
        </div>
        )    
        
}

export default Emails;