import "./style.scss";

export default function Block5() {
    return (
        <>
            <div className="block5" >
                <div className="divh1">
                    <h1>ՏԵԽՆՈԼՈԳԻԱՆԵՐ</h1> </div>

                {/* <div className="technologies">
                    <div className="tech">  <a href=""> <img src="https://hyebrid.tech/static/media/apranq1.e0d6ccf5.png" alt="" /> </a> 
                        <h1>MYSINT 100 RM Dual laser</h1>
                    </div>
                    <div>  <a href="tech"> <img src="https://hyebrid.tech/static/media/apranq2.ea58ef83.png" alt="" /> </a> 
                        <h1>Heron IOS scanner</h1>
                    </div>
                    <div>  <a href="tech"> <img src="https://hyebrid.tech/static/media/apranq3.c20cac1f.png" alt="" /> </a> 
                    <h1>LM-D Manual laser welding system</h1></div> */}
                {/* </div> */}
                    <div className="technologies">
                <a href=""> <div className="techimg1"> </div>
                    <div>
                        <h2>MYSINT 100 RM Dual laser</h2>
                    </div>
                </a>
                <a href=""> <div className="techimg2"> </div>
                    <div>
                        <h2>Heron IOS scanner</h2>
                    </div>
                </a> <a href=""> <div className="techimg3"> </div>
                    <div>
                        <h2>LM-D Manual laser welding system</h2>
                    </div>
                </a>

                </div>



            </div>

        </>
    )



}