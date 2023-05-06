import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

let emailrecieved = []
const Emails = () =>{
    const [emails,setEmails] = useState(emailrecieved)
    const nav = useNavigate();
    let email = useSelector(state=>state.auth.userEmail)
    email = email.replace('.','');
    email = email.replace('@','');
    let id = localStorage.getItem(email)
    useEffect(()=>{
       fetch(`https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/recieved/${email}.json`)
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
    const deleteHandler = (e) =>{
        e.preventDefault();
        let id = e.target.value
        fetch(`https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/recieved/${email}/${id}.json`,
            {
                method : 'DELETE',

            }
        ).then(res=>{
            if(res.ok){
                res.json().then(data=>console.log(data))
                setEmails((pre)=>pre.filter(item=>item.id!==id))
            }
        })
    }
    const showEmailHandler = (item) =>{
        console.log(item)
        fetch(`https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/recieved/${email}/${item.id}.json`,
            {
                method : 'PATCH',
                body : JSON.stringify({
                    isRead : true
                })
            }
        ).then(res=>{
            if(res.ok){
                res.json().then(data=>console.log(data))
                nav(`/${item.id}`)
                
            }
        })
    }
        
    return (<div>
        <h4>Unread Mails {newMails.length}</h4>
        {emails.map((item)=>{
            return (<ul>
                <li style={{cursor: 'pointer'}} onClick={()=>{showEmailHandler(item)}}>
                    {<h4>From : {item.email}</h4>}
                </li>
                <button value={item.id} className="btn btn-danger" onClick={deleteHandler}>Delete</button>
           </ul>
            )
            }) 
    }
        </div>
        )    
        
}

export default Emails;