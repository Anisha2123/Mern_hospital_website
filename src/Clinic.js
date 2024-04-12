
import React from 'react'
import {useNavigate} from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
const Clinic = () => {
    let navigate=useNavigate();
    const gotocal = () => {
        let path='/form';
        navigate(path);
    }
  return (
    <div className='clinic'>
      <Navbar />
      <ul>
        <li>
            <h4>Niryalla Dutta</h4>
            <p className='degree'>MBBS, MD - Dermatology , Venereology & Leprosy</p>
            <p className='pro'>Dermatologist,Aesthetic Dermatologist,Dermatosurgeon,Trichologist</p>
            <p className='exp'>10 Years Experience Overall  (5 years as specialist)</p>
            <p className='dist'>Within 7km</p>
            <p className='star'><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon />
            </p>
            <button className='button' onClick={gotocal} >Book Now</button>
        </li>
        <li>
            <h4>Priyashi Jaishwal</h4>
            <p className='degree'>MBBS, MD - Dermatology , Venereology & Leprosy</p>
            <p className='pro'>Dermatologist,Aesthetic Dermatologist,Dermatosurgeon,Trichologist</p>
            <p className='exp'>10 Years Experience Overall  (5 years as specialist)</p>
            <p className='dist'>Within 7km</p>
            <p className='star'><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon />
            </p>
            <button className='button' onClick={gotocal}>Book Now</button>
        </li>
        <li>
            <h4>Rakul Dutta</h4>
            <p className='degree'>MBBS, MD - Dermatology , Venereology & Leprosy</p>
            <p className='pro'>Dermatologist,Aesthetic Dermatologist,Dermatosurgeon,Trichologist</p>
            <p className='exp'>10 Years Experience Overall  (5 years as specialist)</p>
            <p className='dist'>Within 7km</p>
            <p className='star'><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon />
            </p>
            <button className='button' onClick={gotocal}>Book Now</button>
        </li>
        <li>
            <h4>Niya Sharma</h4>
            <p className='degree'>MBBS, MD - Dermatology , Venereology & Leprosy</p>
            <p className='pro'>Dermatologist,Aesthetic Dermatologist,Dermatosurgeon,Trichologist</p>
            <p className='exp'>10 Years Experience Overall  (5 years as specialist)</p>
            <p className='dist'>Within 7km</p>
            <p className='star'><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon />
            </p>
            <button className='button' onClick={gotocal}>Book Now</button>
        </li>
        <li>
            <h4>Tomako Sukuto</h4>
            <p className='degree'>MBBS, MD - Dermatology , Venereology & Leprosy</p>
            <p className='pro'>Dermatologist,Aesthetic Dermatologist,Dermatosurgeon,Trichologist</p>
            <p className='exp'>10 Years Experience Overall  (5 years as specialist)</p>
            <p className='dist'>Within 7km</p>
            <p className='star'><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon />
            </p>
            <button className='button' onClick={gotocal}>Book Now</button>
        </li>
        <li>
            <h4>Tej Pawan</h4>
            <p className='degree'>MBBS, MD - Dermatology , Venereology & Leprosy</p>
            <p className='pro'>Dermatologist,Aesthetic Dermatologist,Dermatosurgeon,Trichologist</p>
            <p className='exp'>10 Years Experience Overall  (5 years as specialist)</p>
            <p className='dist'>Within 7km</p>
            <p className='star'><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon />
            </p>
            <button className='button' onClick={gotocal}>Book Now</button>
        </li>
        <li>
            <h4>Raveen Sharma</h4>
            <p className='degree'>MBBS, MD - Dermatology , Venereology & Leprosy</p>
            <p className='pro'>Dermatologist,Aesthetic Dermatologist,Dermatosurgeon,Trichologist</p>
            <p className='exp'>10 Years Experience Overall  (5 years as specialist)</p>
            <p className='dist'>Within 7km</p>
            <p className='star'><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon />
            </p>
            <button className='button' onClick={gotocal}>Book Now</button>
        </li>
        <li>
            <h4>Heer Raj</h4>
            <p className='degree'>MBBS, MD - Dermatology , Venereology & Leprosy</p>
            <p className='pro'>Dermatologist,Aesthetic Dermatologist,Dermatosurgeon,Trichologist</p>
            <p className='exp'>10 Years Experience Overall  (5 years as specialist)</p>
            <p className='dist'>Within 7km</p>
            <p className='star'><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon />
            </p>
            <button className='button' onClick={gotocal}>Book Now</button>
        </li>
        <li>
            <h4>Urvashi Naagpaal</h4>
            <p className='degree'>MBBS, MD - Dermatology , Venereology & Leprosy</p>
            <p className='pro'>Dermatologist,Aesthetic Dermatologist,Dermatosurgeon,Trichologist</p>
            <p className='exp'>10 Years Experience Overall  (5 years as specialist)</p>
            <p className='dist'>Within 7km</p>
            <p className='star'><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon />
            </p>
            <button className='button' onClick={gotocal}>Book Now</button>
        </li>
      </ul>
      <Footer className='footer'/>
    </div>
  )
}

export default Clinic
