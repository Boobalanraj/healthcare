import doctor from '../../assets/img/Image-7.png';
import './StyleClient.css';
import Navbar2 from '../Navbar2/Navbar2';

function Clients(){
    return(
<>
    <div >
        <section class="client-bar">
            <Navbar2/>
        </section>
        <section class="doctor-picture">
            <img src={doctor} alt="candidate" />
        </section>
    </div>
</>
    )
}

export default Clients;