import React from "react"
import BookingForm from "../../../components/Book/BookingForm"
import { graphql } from "gatsby"

export default function Form({data}) {
  console.log("book data", data)
  return <BookingForm tests={data.package.tests} fullName={data.package.name} isPackage={true} offerPrice={data.package.offerPrice}/>
}

export const pageQuery = graphql`
  query PackagePageQuery($name: String) {
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
