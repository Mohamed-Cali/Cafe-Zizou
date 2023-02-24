import { FaMapMarkerAlt, FaPhone} from 'react-icons/fa';
import './page.css'
import { Catamaran } from '@next/font/google'

const catamaran = Catamaran({
  subsets: ['latin'],
  display: 'swap',
})

function Contact() {
  const phoneNumber = '02079980575';

  return (
    <div className={catamaran.className}>
      <main className='contact'>
        <h1 className='title'>Contact Us</h1>
        <p className='subtitle'>Feel free to get in touch with us if you have any questions, comments, or feedback.</p>
        <div className='contactInfo'>
          <div className='contactItem'>
            <div>
              <FaMapMarkerAlt />
            </div>
            <p>Cafe Zizou, 52 King St, Strawberry Hill, Twickenham, TW1 3SH</p>
          </div>
          
          <div className='contactItem'>
            <a href={`tel:${phoneNumber}`}>
              <div>
                <FaPhone />
              </div>
              <p>{phoneNumber}</p>
            </a>
          </div>
        </div>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.6781392311523!2d-0.3320127839782784!3d51.44570457962506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760c89f18c6771%3A0xa936b31f64b03ed4!2sCafe%20Zizou!5e0!3m2!1sen!2suk!4"></iframe>

      </main>
    </div>
  );
}

export default Contact;

