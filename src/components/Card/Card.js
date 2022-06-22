import React from "react"
import { kebabCase } from "lodash"
import {
  avatar,
  buttonText,
  card,
  cardButton,
  cardContent,
  cardDescription,
  cardDescriptionSeeMore,
  cardFooter,
  cardHeader,
  cardHeight,
  cardPrice,
  headerCategory,
  headerTestTitle,
  ul,
} from "./Card.module.css"

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
    <div className={card}>
      <div className={cardContent}>
        <div className={cardHeight}>
          <div className={cardHeader}>
            <div>
              <h4 className={headerTestTitle}>{fullName}</h4>
              <p className={headerCategory}>{testType}</p>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png"
                className={avatar}
                alt="Test-Package-Avatar"
              />
            </div>
          </div>
          <div>
            <h2 className={cardPrice}>
              {isPackage
                ? offerPrice
                : testPrice.length === 0
                ? "NA"
                : testPrice}
            </h2>
          </div>
          <div className={cardDescription}>
            <div className={ul}>{isPackage && tests.map(testLists)}</div>
            <a
              href={"/book/" + kebabCase(fullName) + "/details/"}
              className={cardDescriptionSeeMore}
              key={id}
              target="_blank"
              rel="https://gatsbytestpkgsite.gatsbyjs.io"
            >
              See all details...
            </a>
          </div>
          <div className={cardFooter}>
            <a
              href={"/book/" + kebabCase(fullName) + "/form/"}
              target="_blank"
              rel="https://gatsbytestpkgsite.gatsbyjs.io"
            >
              <button className={cardButton}>
                <span className={buttonText}>Book Now</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
