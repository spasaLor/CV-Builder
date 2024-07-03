import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Header({info}){
    return(
        <div className='header'>
            <h2 className="name">{info.name}</h2>
            <div className="other-info">
                <div className="mail">
                    <span><MailIcon/></span>
                    <p>{info.mail}</p>
                </div>
                <div className="phone">
                    <span> <PhoneIcon/></span>
                    <p>{info.num}</p>
                </div>
                <div className="location">
                    <span> <LocationOnIcon/> </span>
                    <p>{info.loc}</p>
                </div>
            </div>
        </div>
    );
}