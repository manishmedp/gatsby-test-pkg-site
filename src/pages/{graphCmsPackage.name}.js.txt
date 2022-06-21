// import { graphql } from "gatsby"
// import React from "react"
// import TestDetails from "../components/TestDetails/TestDetails"

// export default function PackagePage({ data }) {
//   console.log(data);
//   return (
//     <TestDetails
//       fullName={data.package.name}
//       offerPrice={data.package.offerPrice}
//       testType={""}
//       lisCode={""}
//       date={""}
//       tests = {data.package.tests}
//       isPackage={true}
//     />
//   )

//   // return <div>Hello</div>
// }

// export const pageQuery = graphql`
//   query PackagePageQuery($name: String) {
//     package: graphCmsPackage(name: { eq: $name }) {
//       id
//       name
//       offerPrice
//       mrp
//       tests {
//         ... on GraphCMS_DiagnosticTest {
//           id
//           fullName
//         }
//       }
//       name
//     }
//   }
// `
