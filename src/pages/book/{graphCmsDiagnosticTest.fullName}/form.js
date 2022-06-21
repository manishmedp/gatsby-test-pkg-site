import React from "react"
import BookingForm from "../../../components/Book/BookingForm"
import { graphql } from "gatsby"

export default function Form({data}) {
  console.log("book data", data)
  return <BookingForm fullName={data.test.fullName} offerPrice={data.test.price}/>
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