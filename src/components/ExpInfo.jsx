import { useState } from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';

function ExpBanner({name,pos,onRemove,onEdit}){
    return(
        <div className="banner">
            <p className="info">{pos +" at "+name}</p>
            <div className="icons">
                <span onClick={onRemove}><RemoveCircleIcon/></span>
                <span onClick={onEdit}><EditIcon/></span>
            </div>
        </div>
    );
}


export default function ExperienceInfo({expList, setExpList}){
    const[name,setName]=useState('');
    const[pos,setPos]=useState('');
    const[from,setFrom]=useState('');
    const[to,setTo]=useState('');
    const[resp,setResp]=useState('');
    const [editIndex, setEditIndex]=useState(null);

    const handleNameChange=(e)=>setName(e.target.value);
    const handlePosChange=(e)=>setPos(e.target.value);
    const handleFromChange=(e)=>setFrom(e.target.value);
    const handleToChange=(e)=>setTo(e.target.value);
    const handleRespChange=(e)=>setResp(e.target.value);

    const addBtnClicked=()=>{
        if(editIndex!==null){
            const updatedExpList = expList.map((exp, index) =>
                index === editIndex ? {name,pos,from,to,resp} : exp
            );
            setExpList(updatedExpList);
            setEditIndex(null);
        }
        else{
            setExpList([...expList,{name,pos,from,to,resp}]);
        }
        setName('');
        setPos('');
        setFrom('');
        setTo('');
        setResp('');
    };

    const removeBanner=(index)=>{
        setExpList(expList.filter((_,i)=>i!==index));
    };

    const editBanner=(editIndex)=>{
        const banner=expList[editIndex];
        setName(banner.name);
        setPos(banner.pos);
        setFrom(banner.from);
        setTo(banner.to);
        setResp(banner.resp);
        setEditIndex(editIndex);
    }

    return(
        <div className='experience'>
            <h2 className="section-title">Experience</h2>
            <div className="inserted-exp">
                {expList.map((exp,index)=>{
                    return(<ExpBanner key={index} name ={exp.name} pos={exp.pos} onRemove={()=>removeBanner(index)} onEdit={()=>editBanner(index)} />);
                })}
            </div>
            <form action="#" className="form">
                <label>
                    Company Name
                    <input type="text" name="company" id="company" value={name} onChange={handleNameChange} required/>
                </label>
                <label>
                    Position Title
                    <input type="text" name="position" id="position" value={pos} onChange={handlePosChange} required/>
                </label>
                <label>
                    Worked from
                    <input type="date" name="date-from" id="date-from" value={from} onChange={handleFromChange} required/>
                </label>
                <label>
                    To
                    <input type="text" name="date-to" id="date-to" value={to} onChange={handleToChange}  placeholder="DD/MM/YYYY or Present"required/>
                </label>
                <label>
                    Main Responsabilities
                    <textarea name="resp" id="resp" value={resp} onChange={handleRespChange} required/>
                </label>
            </form>
            <div className="buttons">
                <button type="button" onClick={addBtnClicked}>Add</button>
            </div>
            
        </div>
    );
}