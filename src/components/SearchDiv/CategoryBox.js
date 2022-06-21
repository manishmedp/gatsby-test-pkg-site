import React from "react"
import { categoryBox, left, btn, right } from "./SearchDiv.module.css"
import img from "../../images/Mask Group 22.png"

const CategoryBox = () => {
  return (
    <>
      <div className={categoryBox}>
        <div className={left}>
          <h4>Test/Package name</h4>
          <h5>Category name</h5>
          <h3>Rs. 1200</h3>
          <h6>✓ &nbsp; Lorem Ipsum is the dummy text.</h6>
          <h6>✓ &nbsp; Lorem Ipsum is the dummy text.</h6>
          <h6>✓ &nbsp; Lorem Ipsum is the dummy text.</h6>
          <h6>✓ &nbsp; Lorem Ipsum is the dummy text.</h6>
          <h6>✓ &nbsp; Lorem Ipsum is the dummy text.</h6>
          <a href="/book/well-women-package-with-vitamins/form/">
            See all details
          </a>
          <button className={btn}>Book now</button>
        </div>
        <div className={right}>
          <img
            style={{ borderRadius: "50%" }}
            width="50px"
            height="50px"
            src={img}
            alt="avatar"
          />
        </div>
      </div>
    </>
  )
}

export default CategoryBox
