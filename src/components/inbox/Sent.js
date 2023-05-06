import { useEffect,useState } from "react";
import { useSelector } from "react-redux";

let emailrecieved = []
const Sent = () =>{
    const [emails,setEmails] = useState(emailrecieved)
    let senderMail = useSelector(state=>state.auth.userEmail)
    senderMail=senderMail.replace(".","");
    senderMail=senderMail.replace('@','')
    useEffect(()=>{
        fetch(`https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/sent/${senderMail}.json`)
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
     },[senderMail])
     const deleteHandler = (e) =>{
        e.preventDefault();
        let id = e.target.value
        fetch(`https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/recieved/${senderMail}/${id}.json`,
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
    return  emails.map((item)=>{
        return (<ul>
            <li>
                {<h4>From : {item.email}</h4>}
                <h3>{item.subject}</h3>
                <p>{item.text}</p>
            </li>
            <button value={item.id} className="btn btn-danger" onClick={deleteHandler}>Delete</button>
       </ul>
        )
        }) 

}

export default Sent;