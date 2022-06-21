import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
// import Card from "../Card/Card"
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  navLinkTextActive,
} from "./Layout.module.css"
import AllMenuItems from "../AllMenuItems/AllMenuItems"
import TestItems from "../TestItems/TestItems"
import PackageItems from "../PackageItems.js/PackageItems"
// import ReactPaginate from "react-paginate"
// import Pagination from "react-js-pagination"
// import TestDetails from "../TestDetails/TestDetails"

const Layout = ({ children }) => {
  const [allMenu, setAllMenu] = useState(true)
  const [packagesMenu, setPackegesMenu] = useState(false)
  const [testsMenu, setTestsMenu] = useState(false)

  const { allGraphCmsDiagnosticTest, allGraphCmsPackage } =
    useStaticQuery(graphql`
      query MyQuery {
        allGraphCmsDiagnosticTest {
          nodes {
            id
            fullName
            updatedAt
            lisCode
            abbr
            price
            testType
          }
        }

        allGraphCmsPackage {
          nodes {
            name
            mrp
            offerPrice
            remoteTypeName
            stage
            updatedAt
            id
            tests {
              ... on GraphCMS_DiagnosticTest {
                id
                fullName
              }
            }
          }
        }
      }
    `)

  return (
    <div>
      <div className={container}>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/book/tests" className={navLinkText}>
                <span
                  onClick={() => {
                    setAllMenu(true)
                    setPackegesMenu(false)
                    setTestsMenu(false)
                  }}
                  className={allMenu ? navLinkTextActive : ""}
                  aria-hidden="true"
                >
                  All
                </span>
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/book/tests" className={navLinkText}>
                <span
                  onClick={() => {
                    setAllMenu(false)
                    setPackegesMenu(true)
                    setTestsMenu(false)
                  }}
                  className={packagesMenu ? navLinkTextActive : ""}
                  aria-hidden="true"
                >
                  Packages
                </span>
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/book/tests" className={navLinkText}>
              <span
                onClick={() => {
                  setAllMenu(false)
                  setPackegesMenu(false)
                  setTestsMenu(true)
                }}
                className={testsMenu ? navLinkTextActive : ""}

                aria-hidden="true"
              >
                Tests
              </span>
              </Link>
            </li>
          </ul>
        </nav>

        {allMenu && (
          <AllMenuItems
            testData={allGraphCmsDiagnosticTest.nodes}
            packageData={allGraphCmsPackage.nodes}
          />
        )}

        {packagesMenu && (
          <PackageItems packageData={allGraphCmsPackage.nodes} />
        )}

        {testsMenu && (
          <TestItems
            testData={allGraphCmsDiagnosticTest.nodes}
            totalPages={Math.ceil(allGraphCmsDiagnosticTest.nodes.length / 6)}
          />
        )}
      </div>
    </div>
  )
}
export default Layout
