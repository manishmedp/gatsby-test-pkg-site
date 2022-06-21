// import { graphql } from "gatsby"
// import React from "react"
// import TestDetails from "../components/TestDetails/TestDetails"

// export default function PackagePage({ data }) {
//   console.log(data)
//   return (
//     <TestDetails
//       fullName={data.test.fullName}
//       priceOfTest={data.test.price}
//       testType={data.test.testType}
//       lisCode={""}
//       date={""}
//       tests={"data.package.tests"}
//       isTest={true}
//     />
//   )

//   // return <div>Hello</div>
// }

// export const pageQuery = graphql`
//   query TestPageQuery($fullName: String) {
//     test: graphCmsDiagnosticTest(fullName: { eq: $fullName }) {
//       id
//       fullName
//       price
//       testType
//     }
//   }
// `
