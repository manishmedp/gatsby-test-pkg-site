import React from "react"
import { useState } from "react"
import { GraphQLClient } from "graphql-request"
import { kebabCase } from "lodash"
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
  packageDetailsLink,
} from "./Book.module.css"

import bgImage from "../../images/Mask Group 30.png"
import Logo from "../../images/Asset 1-8.png"
import check from "../../images/Group 7022.png"
import img1 from "../../images/Component 29 – 17.png"
import { Link } from "gatsby"
import { useSnackbar } from "notistack"

const BookingForm = ({ fullName, offerPrice, tests, isPackage, packageId }) => {
  const { enqueueSnackbar } = useSnackbar()
  const [formData, setFormData] = useState({
    fName: "",
    email: "",
    mobNum: "",
    address: "",
    city: "",
    pincode: "",
    testName: "",
    bookingDate: "",
    timeSlot: "",
    consultation: "",
    timeSlotUnix: "",
  })

  const inputHandler = e => {
    const { name, value } = e.target
    setFormData(prev => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const timeHandler = e => {
    const { name, value } = e.target

    const newValue = Math.floor(new Date(value).getTime() / 1000)
    setFormData(prev => {
      return {
        ...prev,
        [name]: value,
        timeSlotUnix: newValue,
      }
    })
  }

  const graphcms = new GraphQLClient(
    "https://api-ap-south-1.graphcms.com/v2/cl1kjl3cx7geq01z62361cfm1/master",
    {
      headers: {
        authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTQ1MTUwMDgsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9jbDFramwzY3g3Z2VxMDF6NjIzNjFjZm0xL21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImZhYzM4NzhhLTZjMTctNDQxMC05YjdkLWY2MTc4NWU3MjIyNyIsImp0aSI6ImNsNDJuaW44djQ3ZzMwMXhzM3F0MzcyNjUifQ.0SCLVkWOZlHANCM7uaX3AVC8GnaNV-mGfWBTiaylkDJWSuqDXvst3fC2InLTjLgaQf853st5ErCfUL35JTEaE4GfOqrdc3j7BhSBn1xq6GVn8sDziYpIbNHvBGElCvP2gHxQNxn0PjoJFYUZJMa_B-YZCoN0JJVWR_BJFhfPGefG36ZPRywrnl_7aKUM4nX8Bv7xZhsmVxOOC64i_CdekjoyFHGEkNiIZrJVcOGExxhj-t1bxv3kKJ8hLJtXMVismCpfGoXph9sCnTd6fxsYfOsWyPoeQIck8asKRiX2zEVxkVjPFD6zLyfxUYUvfn7xTAX_c5nwbWec_oDexuK1hTCyG4LV3G_pfd8WRqbiNEoIYcyX7h24FvD6NsimSgoi8oVyTyzS-bml_ddZ2IACPGdMgXZmNNKl7t4cStLjtQIwtosaw2rIn4C8LOp7_gXRj78V7bu0h3dGHszTmnyHXE_UFP3ViXYIHa4LoTRhtm-0GWU2-XUj4BsLir9wq7d8mvrKiM51epFALqmf0pwPLtC0dUqNrJ0a6GIzAiJKBW_oIFZDGNpBZxnP0gO3S6jVPPaJxu2EuMQN3FAc3p2EcUFqrHoIWDaKMfBuKgIxQQE3D3g1GSPmzYTZmQlVtXK3q_hyKDmTl4mDegsPEX1ZM1GXJf61o7dC6zdafbqK9ys`,
      },
    }
  )

  const submitHandler = async e => {
    e.preventDefault()
    console.log(formData)
    try {
      const data = await graphcms.request(
        `mutation addBooking($price: String!,
        $patientEmail: String!,
        $patientFullname: String!,
        $address: String!,
        $mobile: String!,
        $city: String,
        $pincode: String!,
        $bookingFor: String!,
        $date: Date!,
        $time: Int!,
        $type: BookingType!,
        $bookingStatus: BookingStatus
        $id: ID)
        {
          createBooking(data :{price: $price, 
            patientEmail: $patientEmail, 
            patientFullname: $patientFullname,
            address: $address,
            mobile: $mobile,
            city: $city,
            pincode: $pincode,
            bookingFor: $bookingFor,
            date: $date,
            time: $time,
            type: $type,
            bookingStatus: $bookingStatus,
            packageTest: {connect: {Package: {id: $id}}}
          })
            {
              patientFullname
            }
        }`,
        {
          price: offerPrice.toString(),
          patientEmail: formData.email,
          patientFullname: formData.fName,
          address: formData.address,
          mobile: formData.mobNum,
          city: formData.city,
          pincode: formData.pincode,
          bookingFor: formData.consultation,
          date: formData.bookingDate,
          time: formData.timeSlotUnix,
          type: "package",
          bookingStatus: "booking_done",
          id: packageId.toString(),
        }
      )
      console.log(JSON.stringify(data, undefined, 2))
      enqueueSnackbar("Booking Successful", { variant: "success" , autoHideDuration: 3000 })
    } catch (error) {
      console.error(JSON.stringify(error, undefined, 2))
      enqueueSnackbar("Booking Not Successful", { variant: "error" })
    }
  }

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
              <form action="/" method="POST" onSubmit={submitHandler}>
                <div className={packageDetailsLink}>
                  <Link to={"/book/" + kebabCase(fullName) + "/details/"}>
                    <h1>View Package Details</h1>
                  </Link>
                </div>
                <div className={full}>
                  <label htmlFor="name">Full name</label>
                  <input
                    type="text"
                    id="name"
                    name="fName"
                    onChange={inputHandler}
                    value={formData.fName}
                  />
                </div>
                <div className={half}>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={inputHandler}
                    value={formData.email}
                  />
                </div>
                <div className={half}>
                  <label htmlFor="mobileNumber">Mobile number</label>
                  <input
                    type="text"
                    id="mobileNumber"
                    name="mobNum"
                    onChange={inputHandler}
                    value={formData.mobNum}
                  />
                </div>
                <div className={full}>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={inputHandler}
                    value={formData.address}
                  />
                </div>
                <div className={half}>
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={inputHandler}
                    value={formData.city}
                  />
                </div>
                <div className={half}>
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    onChange={inputHandler}
                    value={formData.pincode}
                  />
                </div>
                <div className={`${full} ${greenText}`}>
                  <img width="15px" height="15px" src={check} alt="" />
                  &nbsp; We are servicing in your location!
                </div>
                <div
                  className={`${half} ${consultationBox}`}
                  onChange={inputHandler}
                >
                  <label htmlFor="self">Consultation</label>
                  <input
                    type="radio"
                    id="self"
                    name="consultation"
                    value="SELF"
                  />{" "}
                  Self
                  <input
                    type="radio"
                    id="others"
                    name="consultation"
                    value="Others"
                  />{" "}
                  Others
                </div>
                <div className={half}>
                  <label htmlFor="testName">Test name</label>
                  <input
                    type="text"
                    id="testName"
                    onChange={inputHandler}
                    name="testName"
                    value={formData.testName}
                  />
                </div>
                <div className={half}>
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="bookingDate"
                    onChange={inputHandler}
                    value={formData.bookingDate}
                  />
                </div>
                <div className={half}>
                  <label htmlFor="timeSlot">Time slot</label>
                  <input
                    type="datetime-local"
                    id="timeSlot"
                    name="timeSlot"
                    onChange={timeHandler}
                    value={formData.timeSlot}
                  />
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
                      {isPackage &&
                        tests.map(test => {
                          return (
                            <div key={test.id}>
                              <p>✓ &nbsp;{test.fullName}</p>
                            </div>
                          )
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
