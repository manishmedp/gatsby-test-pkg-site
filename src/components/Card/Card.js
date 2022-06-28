import React from "react"
import { kebabCase } from "lodash"
import { categoryBox, left, btn, right } from "./Card.module.css"
import img from "../../images/Mask Group 22.png"

const Card = ({
  data,
  fullName,
  testType,
  lisCode,
  shortName,
  date,
  id,
  isPackage,
  offerPrice,
  tests,
  testPrice,
}) => {
  if (isPackage) {
    tests = tests.slice(0, 5)
  }

  const testLists = test => {
    return <div key={test.id}>✓ {test.fullName}</div>
  }
  return (
    <div className={categoryBox}>
      <div className={left}>
        <h4>{fullName}</h4>
        <h5>{testType}</h5>
        <h3>
          {isPackage ? offerPrice : testPrice.length === 0 ? "NA" : testPrice}
        </h3>
        <h6>{isPackage && tests.map(testLists)}</h6>

        <div>
          <a
            href={"/book/" + kebabCase(fullName) + "/details/"}
            key={id}
            target="_blank"
            rel="https://gatsbytestpkgsite.gatsbyjs.io"
          >
            See all details
          </a>
        </div>
        <a
          href={"/book/" + kebabCase(fullName) + "/form/"}
          target="_blank"
          rel="https://gatsbytestpkgsite.gatsbyjs.io"
        >
          <button className={btn}>Book now</button>
        </a>
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
  )
}

export default Card
