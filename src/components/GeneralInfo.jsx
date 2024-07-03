import { useState } from "react";

export default function GeneralInfo({info,setInfo}){
    const[name,setName]=useState('');
    const[mail,setMail]=useState('');
    const[num,setNum]=useState('');
    const[loc,setLoc]=useState('');

    const handleNameChange=(e)=>setName(e.target.value);
    const handleMailChange=(e)=>setMail(e.target.value);
    const handleNumChange=(e)=>setNum(e.target.value);
    const handleLocChange=(e)=>setLoc(e.target.value);

    const editGeneral=()=>{
        setName(info.name);
        setMail(info.mail);
        setNum(info.num);
        setLoc(info.loc);
    }

    const saveButtonClicked=()=>{
        setInfo({name,mail,num,loc});
    }

    return(
        <div className='general'>
            <h2 className="section-title">Personal Info</h2>
            <form action="#" className="form">
                <label>
                    Full Name
                    <input type="text" name="name" id="name" value={name} onChange={handleNameChange} required/>
                </label>
                <label>
                    Email
                    <input type="mail" name="mail" id="mail" value={mail} onChange={handleMailChange} required/>
                </label>
                <label>
                    Phone Number
                    <input type="num" name="phone" id="phone" value={num} onChange={handleNumChange} required/>
                </label>
                <label>
                    Location
                    <input type="text" name="location" id="location" value={loc} onChange={handleLocChange} required/>
                </label>
            </form>
            <div className="buttons">
                <button type='button' onClick={editGeneral}>Edit</button>
                <button type="button" onClick={saveButtonClicked}>Save</button>
            </div>
        </div>
    );
}