import "./style.scss";
import 'animate.css';
import ExamplePdf from '../../assets/images/2.png';
import { Link } from 'react-router-dom';


export default function Block4() {
    return (
        <>
            <div className="block4" >
                <div className="block4layer">
                    <div className="block4text">
                        <h2 >Գնացուցակ</h2>
                        <h3 >Գնացուցակի համար սեղմեք կոճակը և ներբեռնեք այն</h3>
                        <div>
                            <a href={ExamplePdf} download="ExamplePdf" target="_blank"
                                rel="noreferrer">
                                <button className=""><img src="https://cdn-icons-png.flaticon.com/256/724/724933.png" className="btnImg" alt="" /> Ներբեռնեք Գնացուցակը</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )



}