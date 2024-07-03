import EducationalInfo from "./EduInfo";
import ExperienceInfo from "./ExpInfo";
import GeneralInfo from "./GeneralInfo";
import '../styles/left.css';

export default function Left({eduList, setEduList, expList, setExpList, info, setInfo}){
    return(
        <section className="left">
            <GeneralInfo info={info} setInfo={setInfo}/>
            <EducationalInfo eduList={eduList} setEduList= {setEduList} />
            <ExperienceInfo expList={expList} setExpList= {setExpList} />
        </section>
    );
}