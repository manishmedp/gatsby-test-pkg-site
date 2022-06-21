import React from 'react'
import {
    contactBox, 
    footerBox, footerRow, firstRow, secondRow,
    left, leftCol, right, rightRow,
} from "./Footer.module.css";

import Logo from "../../images/White logo vertical.png";
import img1 from "../../images/Group 5085.png";
import img2 from "../../images/Group 5086.png";
import img3 from "../../images/Group 5087.png";
import img4 from "../../images/Group 5088.png";
import arrowUp from "../../images/Group 5093.png";
import callLogo from "../../images/Group 5083.png";


const Footer = () => {
    return (
        <>
            <div className={contactBox} style={{ color: "#f1f2f4" }}>
                <h3><b>Just a call away </b></h3>
                <p>We are always within reach to answer any doubts or questions.</p>
                <form action="#" method="post">
                    <div>
                        <input type="text" placeholder="Type in your query" />
                        <button type="submit" >
                            Send
                        </button>
                    </div>
                </form>
                <p>Or call us at &nbsp; <img alt="" width="15px" height="15px" src={callLogo} /> &nbsp; + 91
                    9999999999</p>
            </div>
            {/* <!-- contact div ends here --> */}

            <div className={footerBox}>
                <div className={footerRow}>
                    <div className={firstRow}>
                        <div className={left}>
                            <img width="100px" alt="" height="100px" src={Logo} />
                        </div>
                        <div className={right}>
                            <img width="35px" alt="" height="35px" src={arrowUp} />
                        </div>
                    </div>
                    <div className={secondRow}>
                        <div className={`${left} ${leftCol}`}>
                            <p>#677, 1st Floor, Suite No. 348, 27th Main,
                                <br />13th Cross HSR Layout,
                                <br /> Sector 1, Bangalore, Karnataka, India, 560102,
                            </p>
                            <br />
                            <p><span style={{ color: "rgb(198, 198, 198)", fontWeight: "bold" }}>Powered by </span><span
                                className="medpiper-logo">Medpiper</span></p>
                        </div>
                        <div className={`${right} ${rightRow}`}>
                            <div style={{ width: "70%" }}></div>
                            <img width="35px" alt="" height="35px" src={img1} />
                            <img width="35px" alt="" height="35px" src={img2} />
                            <img width="35px" alt="" height="35px" src={img3} />
                            <img width="35px" alt="" height="35px" src={img4} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- footer div ends here --> */}
        </>
    )
}

export default Footer