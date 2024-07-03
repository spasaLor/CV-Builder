import {format} from 'date-fns';

export default function Eductional({eduList}){
    let components = eduList.map((edu)=>{
        let d = new Date(edu.date);
        const formattedDate = format(d, 'MMMM yyyy');
        return(
            <div className="list-item">
                <p>{edu.title} at {edu.school}</p>
                <p>{formattedDate}</p>
            </div>
        );
    });
    return(
        <div className="right-educational">
            <h2 className="title">Education</h2>
            <div className="edu-list">
                {components}
            </div>
        </div>
    );
}