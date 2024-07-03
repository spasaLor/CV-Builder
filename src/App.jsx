import { useState } from 'react'
import './App.css'
import Left from './components/Left';
import Right from './components/Right';

function App() {
  const [eduList,setEduList]=useState([{school:'My School',title:'My Title',date:'01/01/1010'}]);
  const [expList,setExpList]=useState([{name:'Company Name',pos:'My Position',from:'01/01/1010',to:'02/02/2020',resp:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tortor nisi, gravida vitae scelerisque vitae, pharetra quis quam. Sed in interdum leo, gravida ultrices sapien'}]);
  const [info,setInfo]=useState({name:'Placeholder Name',mail:'mail@mail.com',num:'+00 12345678',loc:'The Earth'});


  return(
    <main className='container'>
      <Left eduList= {eduList} setEduList={setEduList} expList= {expList} setExpList={setExpList} info={info} setInfo={setInfo} />
      <Right eduList= {eduList} expList= {expList} info={info}/>
    </main>
  );
}

export default App
