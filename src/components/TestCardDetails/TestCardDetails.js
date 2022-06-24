import React from "react"
import img1 from "../../images/Component 29 – 18.png"
import img2 from "../../images/Mask Group 22.png"
import { kebabCase } from "lodash"
import { Link } from "gatsby"
import {
  singleCategoryBox,
  main,
  closeBtn,
  categoryInfo,
  price,
  contentInfo,
  left,
  right,
  bookBtn,
  btn,
  
  contentInfoWrapper
} from "./TestCardDetails.module.css"
function CardComponent({ isPackage, fullName, offerPrice, tests, testType }) {
  let isTestLengthBigger = false
  if (isPackage && tests.length > 6) {
    isTestLengthBigger = true
  }

  const testLists = test => {
    return (
      <h6 key={test.id}>
        ✓ {test.fullName}
      </h6>
    )
  }

  return (
    <div className={main}>
      <div className={singleCategoryBox}>
        <div className={closeBtn}>
          <button className={btn}>
            <Link to="/book/tests">
              <img width="25px" height="25px" src={img1} alt="bgimg" />
            </Link>
          </button>
        </div>
        <div className={categoryInfo}>
          <img width="100px" height="100px" src={img2} alt="bgimage" />
          <div>
            <h3>{fullName}</h3>
            <h6>{isPackage ? "" : testType}</h6>
          </div>
          <div className={price}>
            <h2>{isPackage && offerPrice}</h2>
            <h2>
              {!isPackage && (offerPrice.length === 0 ? "NA" : offerPrice)}
            </h2>
          </div>
        </div>
        {/* <!-- categoryInfo div closes here --> */}
        <div className={contentInfo} >
          <div className={contentInfoWrapper}>
            <div className={left}>
              {isPackage && !isTestLengthBigger
                ? tests.map(testLists)
                : isPackage && tests.slice(0, tests.length / 2).map(testLists)}
            </div>
            <div className={right}>
              {isPackage &&
                isTestLengthBigger &&
                tests.slice(tests.length / 2, tests.length).map(testLists)}
            </div>
          </div>
        </div>
        {/* <!-- content info ends here --> */}
        <div>
          <Link to={"/book/" + kebabCase(fullName) + "/form/"}>
            <button className={bookBtn}>Book now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
