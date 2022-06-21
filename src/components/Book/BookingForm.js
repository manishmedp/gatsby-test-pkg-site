import React from "react"

import {
  halfImage,
  logo,
  bookTestDiv,
  wrapperBox,
  left,
  right,
  full,
  half,
  greenText,
  consultationBox,
  btn,
} from "./Book.module.css"

import bgImage from "../../images/Mask Group 30.png"
import Logo from "../../images/Asset 1-8.png"
import check from "../../images/Group 7022.png"
import img1 from "../../images/Component 29 – 17.png"

const BookingForm = ({ fullName, offerPrice, tests, isPackage }) => {
  return (
    <>
      <div className={halfImage}>
        <img src={bgImage} alt="" />
      </div>

      <section>
        <div className={logo}>
          <a href="/">
            <img width="60px" height="70px" src={Logo} alt="" />
          </a>
        </div>
        <hr />
        <div className={bookTestDiv}>
          <a href="/book/tests">
            <img width="25px" height="25px" src={img1} alt="" />
          </a>
        </div>
        <div className={wrapperBox}>
          <div className={left}>
            <form action="/" method="POST">
              <div className={full}>
                <label htmlFor="name">Full name</label>
                <input type="text" id="name"/>
              </div>
              <div className={half}>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email"/>
              </div>
              <div className={half}>
                <label htmlFor="mobileNumber">Mobile number</label>
                <input type="number" id="mobileNumber"/>
              </div>
              <div className={full}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address"/>
              </div>
              <div className={half}>
                <label htmlFor="city">City</label>
                <input type="text" id="city"/>
              </div>
              <div className={half}>
                <label htmlFor="pincode">Pincode</label>
                <input type="number" id="pincode"/>
              </div>
              <div className={`${full} ${greenText}`}>
                <img width="15px" height="15px" src={check} alt="" />
                &nbsp; We are servicing in your location!
              </div>
              <div className={`${half} ${consultationBox}`}>
                <label htmlFor="self">Consultation</label>
                <input
                  
                  type="radio"
                  id="self"
                  name="Consultation"
                  value="SELF"
                />{" "}
                Self
                <input
                  type="radio"
                  id="others"
                  name="Consultation"
                  value="others"
                />{" "}
                Others
              </div>
              <div className={half}>
                <label htmlFor="testName">Test name</label>
                <input type="text" id="testName"/>
              </div>
              <div className={half}>
                <label htmlFor="date">Date</label>
                <input type="date" id="date"/>
              </div>
              <div className={half}>
                <label htmlFor="timeSlot">Time slot</label>
                <input type="datetime-local" id="timeSlot"/>
              </div>
              <div>
                <button type="submit" className={btn}>
                  Proceed to pay and back
                </button>
              </div>
            </form>
          </div>
          <div className={right}>
            <div>
              <h2>{fullName}</h2>
              <div>
                <div>
                  <h1>{offerPrice.length === 0 ? "NA" : offerPrice}</h1>
                  <div>
                    {isPackage && tests.map(test => {
                      return (<div key={test.id}>
                        <p>✓ &nbsp;{test.fullName}</p>
                      </div>)
                    })}
                    {/* <div>
                      <p>✓ &nbsp;Lorem Ipsum is the dummy text.</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BookingForm
