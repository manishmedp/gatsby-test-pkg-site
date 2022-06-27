import React from "react"
import BookingForm from "../../../components/Book/BookingForm"
import { graphql } from "gatsby"
import Seo from "../../../components/Seo"

export default function Form({ data }) {
  console.log("book data", data)
  return (
    <div>
      <Seo title={data.test.fullName}/>
      <BookingForm fullName={data.test.fullName} offerPrice={data.test.price} />
    </div>
    
  )
}

export const pageQuery = graphql`
  query TestPageQuery($fullName: String) {
    test: graphCmsDiagnosticTest(fullName: { eq: $fullName }) {
      id
      fullName
      price
      testType
    }
  }
`
