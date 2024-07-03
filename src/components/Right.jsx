import Header from "./PersonInfo";
import '../styles/right.css';
import Eductional from "./Educational";
import Practical from "./Practical";

export default function Right({eduList, expList, info}){
    return(
        <section className="right">
            <div className="cv">
                <Header info={info}/>
                <Eductional eduList={eduList}/>
                <Practical expList={expList}/>
            </div>
        </section>        
    );
}