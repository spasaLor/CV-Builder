import { useState } from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';

function EduBanner({school,title,onRemove, onEdit}){
    return(
        <div className="banner">
            <p className="info">{title +" at "+school}</p>
            <div className="icons">
                <span onClick={onRemove}><RemoveCircleIcon/></span>
                <span onClick={onEdit}><EditIcon/></span>
            </div>
        </div>
    );
}

export default function EducationalInfo({eduList,setEduList}){
    
    const [school,setSchool]=useState('');
    const [title,setTitle]=useState('');
    const [date,setDate]=useState('');
    const [editIndex, setEditIndex]=useState(null);

    const handleSchoolChange=(e)=>{
        setSchool(e.target.value);
    };
    
    const handleTitleChange=(e)=>{
        setTitle(e.target.value);
    };
    
    const handleDateChange=(e)=>{
        setDate(e.target.value);
    };

    const addBtnClicked=()=>{
        if(editIndex!==null){
            const updatedEduList = eduList.map((edu, index) =>
                index === editIndex ? { school, title, date } : edu
            );
            setEduList(updatedEduList);
            setEditIndex(null);
        }
        else{
            setEduList([...eduList,{school,title,date}]);
        }
        setDate('');
        setSchool('');  
        setTitle('');
    };

    const removeBanner=(index)=>{
        setEduList(eduList.filter((_,i)=>i!==index));
    };

    const editBanner=(editIndex)=>{
        const banner=eduList[editIndex];
        setSchool(banner.school);
        setDate(banner.date);
        setTitle(banner.title);
        setEditIndex(editIndex);
    }

    return(
        <div className='educational'>
            <h2 className="section-title">Educational Info</h2>
            <div className="inserted-edu">
                {eduList.map((edu,index)=>{
                    return (<EduBanner key={index} school={edu.school} title={edu.title} onRemove={()=>removeBanner(index)} onEdit={()=>editBanner(index)}/>);
                })}
            </div>
            <form action="#" className="form">
                <label>
                    School Name
                    <input type="text" name="school" id="school" value={school} onChange={handleSchoolChange} required/>
                </label>
                <label>
                    Title of Study
                    <input type="text" name="study" id="study" value={title} onChange={handleTitleChange} required/>
                </label>
                <label>
                    Date of Study
                    <input type="date" name="date" id="date" value={date} onChange={handleDateChange} required/>
                </label>
            </form>
            <div className="buttons">
                <button type="button" id="add-btn" onClick={addBtnClicked}>Add</button>
            </div>
        </div>
    );
}