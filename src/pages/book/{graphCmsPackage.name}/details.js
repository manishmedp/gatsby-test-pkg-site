import React from 'react'
import TestCardDetails from "../../../components/TestCardDetails/TestCardDetails"
import { graphql } from 'gatsby';

const details = ( {data }) => {
    console.log("data: ", data);
  return (
    <TestCardDetails isPackage={true} fullName={data.package.name} tests={data.package.tests} offerPrice={data.package.offerPrice}/>
  )
}

export default details

export const pageQuery = graphql`
  query PackageDetailsQuery($name: String) {
    package: graphCmsPackage(name: { eq: $name }) {
      id
      name
      offerPrice
      mrp
      tests {
        ... on GraphCMS_DiagnosticTest {
          id
          fullName
        }
      }
      name
    }
  }
`