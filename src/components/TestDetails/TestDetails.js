import React from "react"
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"
import { Link } from "gatsby"
import {
  avatar,
  crossIcon,
  header,
  headerContents,
  headerTest,
  headerTestCategory,
  headerTestTitle,
  icon,
  listItems,
  lists,
  testDetailsButton,
  testDetailsCard,
  testHeader,
  testPrice,
} from "./TestDetails.module.css"

const TestDetails = ({
  fullName,
  shortName,
  testType,
  lisCode,
  date,
  isPackage,
  isTest,
  tests,
  offerPrice,
  priceOfTest,
}) => {
  let isTestLengthBigger = false
  if (tests.length > 6) {
    isTestLengthBigger = true
    // firstHalfTests = tests.slice(0,(tests.length)/2)
    // secondHalfTests = tests.slcie(tests.length/2, tests.length)
  }
  const testLists = test => {
    return (
      <li key={test.id}>
        <span>✓ </span>
        {test.fullName}
      </li>
    )
  }
  return (
    <div className={testDetailsCard}>
      <div className={testHeader}>
        <div className={crossIcon}>
          <Link to="/">
            <CancelOutlinedIcon className={icon} />
          </Link>
        </div>
        <div className={header}>
          <div className={headerContents}>
            <img
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png"
              alt="xyz"
              className={avatar}
            />
            <div className={headerTest}>
              <h4 className={headerTestTitle}>{fullName}</h4>
              <p className={headerTestCategory}>{isTest && testType}</p>
            </div>
          </div>
          <div>
            <h2 className={testPrice}>
              {isPackage
                ? offerPrice
                : priceOfTest.length === 0
                ? "NA"
                : priceOfTest}
            </h2>
          </div>
        </div>
      </div>
      <div className={lists}>
        <ul className={listItems}>
          {isPackage && !isTestLengthBigger
            ? tests.map(testLists)
            : isPackage && tests.slice(0, tests.length / 2).map(testLists)}
        </ul>
        {isPackage && isTestLengthBigger && (
          <ul className={listItems}>
            {tests.slice(tests.length / 2, tests.length).map(testLists)}
          </ul>
        )}
      </div>

      <div>
        <button className={testDetailsButton}>Book Now</button>
      </div>
    </div>
  )
}

export default TestDetails
