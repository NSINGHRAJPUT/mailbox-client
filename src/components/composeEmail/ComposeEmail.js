import React, { useState, useRef } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

function ComposeEmail() {
  const [editorState, setEditorState] = useState(() =>EditorState.createEmpty())
  const emailref = useRef();
  const subjectref = useRef();

  const submitHandler = (e) =>{
    e.preventDefault();
    const data = convertToRaw(editorState.getCurrentContent())
    const finalData = data.blocks[0].text
    let email = emailref.current.value
    email=email.replace(".","");
    email=email.replace('@','')
    let obj = {
        email:email,
        subject: subjectref.current.value,
        text : finalData
    }
    console.log(obj)
    fetch(`https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/${email}.json`,
        {
            method : 'POST',
            body : JSON.stringify(obj),
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        ).then(res=>{
            if(res.ok){
                res.json().then(data=>{console.log(data)
                console.log(data.name)
                localStorage.setItem(`${email}`,data.name)})
            }else {
                res.json().then(data=>alert(data))
            }
        })
  }

  return (
    <form className="container" onSubmit={submitHandler}>
      <div className="form-floating">
            <input type="email" className="form-control" placeholder="Email" ref={emailref}></input>
            <label className="form-label">Email</label>
        </div>
        <div className="form-floating">
            <input type="text" className="form-control" placeholder="Subject" ref={subjectref}></input>
            <label className="form-label">Subject</label>
        </div>
      <Editor defaultEditorState={editorState} onEditorStateChange={setEditorState} wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class" />
      <button className='btn btn-primary'>Send</button>
    </form>
  )
}

export default ComposeEmail
