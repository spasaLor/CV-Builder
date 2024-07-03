import {format} from 'date-fns';

export default function Practical({expList}){
    let components = expList.map((exp)=>{
        let from = new Date(exp.from);
        let to;
        let formattedTo;
        try {
            to=new Date(exp.to);
            formattedTo = format(to, 'MMMM yyyy');
        } catch (error) {
            formattedTo='Present'
        }        
        const formattedFrom = format(from, 'MMMM yyyy');
        
        return(
            <div className="list-item">
                <p>{exp.pos} at <b>{exp.name}</b></p>
                <p>{formattedFrom} - {formattedTo}</p>
                <p>{exp.resp}</p>
            </div>
        );
    });
    return(
        <div className="right-experience">
            <h2 className="title">Professional Experience</h2>
            <div className="practical-list">
                {components}
            </div>
        </div>
    );
}