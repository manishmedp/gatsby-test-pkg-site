import React from 'react'
import TestCardDetails from "../../../components/TestCardDetails/TestCardDetails"
import { graphql } from 'gatsby';
import Seo from "../../../components/Seo"

const details = ( {data }) => {
    console.log("data: ", data);
  return (
    <div>
      <Seo title={data.package.name}/>
      <TestCardDetails isPackage={true} fullName={data.package.name} tests={data.package.tests} offerPrice={data.package.offerPrice}/>
    </div>
    
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