
import { Element } from 'react-scroll';
import contactme from '../assets/image/contact_me.jpg'
import '../assets/style/contact.css';
function contact() {
    return (
        <Element name='contact'>
            <div className='about_page'>
                <div className='thumbnail_contact'>
                    <img src={contactme} alt='contact me'/>
                </div>
                <div className='contact_all'>
                    <h1>Contatc Me</h1>
                    <div className='contact_me'>
                    <span> <i className="fas fa-phone-alt"></i> : <h1>+885 93470854</h1></span>
                    <span><i className="fas fa-envelope"></i> : <h1>vongsalin0854@gmail.com</h1></span>
                    <span> <i className="fas fa-map-marked-alt"></i> : <h1>Tuek Thla,Sen Sok, Phnom Penh.</h1> </span>
                    </div>
                </div>
            </div>
        </Element>
    )
}
export default contact;