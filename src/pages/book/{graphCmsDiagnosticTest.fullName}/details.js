import React from "react"
import TestCardDetails from "../../../components/TestCardDetails/TestCardDetails"
import { graphql } from "gatsby"

const details = ({ data }) => {
  console.log("data: ", data)
  return (
    <TestCardDetails
      isPackage={false}
      fullName={data.test.fullName}
      offerPrice={data.test.price}
      testType={data.test.testType}
    />
  )
}

export default details

export const pageQuery = graphql`
  query TestDetailsQuery($fullName: String) {
    test: graphCmsDiagnosticTest(fullName: { eq: $fullName }) {
      id
      fullName
      price
      testType
    }
  }
`
