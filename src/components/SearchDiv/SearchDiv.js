import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "../../images/Asset 1-8.png"
import back from "../../images/Component 29 – 17.png"
import search from "../../images/Component 9 – 1.png"
import bgImage from "../../images/Mask Group 30.png"
// import CategoryBox from "./CategoryBox"
import Layout from "../Layout/Layout"
import {
  // active,
  bookTestDiv,
  btn,
  // categoryBoxWrap,
  categoryDiv,
  // categoryType,
  halfImage,
  logo,
  searchDiv,
  tagBox,
} from "./SearchDiv.module.css"
import Tag from "./Tag"
import Card from "../Card/Card"
// import PackageItems from "../PackageItems.js/PackageItems"

const SearchDiv = () => {

  const { allGraphCmsPackage } =
    useStaticQuery(graphql`
  query MyAnotherQuery {
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

  // console.log(allGraphCmsPackage.nodes);

  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleFormSubmit = () => {
    // Search();
    // allGraphCmsPackage.nodes.map((p, id)=>{
    //   return console.log(p.name)
    // })
    searchItems(searchInput)
    console.log(searchInput + " ");
    // console.log("form submitted");
  }

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filtereditem = allGraphCmsPackage.nodes.filter((item) => {
        console.log(item)
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filtereditem)
    }
    else {
      setFilteredResults(allGraphCmsPackage.nodes)
    }
    // console.log(filteredResults);

  }

  return (
    <>
      <div className={halfImage}>
        <img src={bgImage} alt="" />
      </div>
      <section>
        <div className={logo}>
          <Link to="/">
            <img width="60px" height="70px" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className={bookTestDiv}>
          <Link to="/">
            <img width="25px" height="25px" src={back} alt="back" />
          </Link>
          &nbsp; &nbsp;
          <h2>Book a test</h2>
        </div>
        <hr style={{ width: "80%" }} />
        <div className={searchDiv}>
          <form action="#" onSubmit={handleFormSubmit}>
            <div>
              <img width="10px" height="10px" src={search} alt="search" />
              <input
                type="text"
                placeholder="Search for a test or package by name"
                onChange={(e) => searchItems(e.target.value)}
              />
            </div>

            <button type="submit" className={btn}>Search</button>
          </form>
          <h6>Popular search results</h6>
          <div className={tagBox}>
            <Tag tagName={" Covid packages "} />

            <Tag tagName={" PCOS/PCOD "} />

            <Tag tagName={" Diabetes "} />
          </div>
          {/* <!-- tag box ends here --> */}
        </div>
        {/* <!-- search div ends here --> */}

        <div className={categoryDiv}>
          {searchInput.length > 1 ? (
            filteredResults.map((item) => {
              return (
                <>
                 <Card
                  key={item.id}
                  item={item}
                  fullName={item.name}
                  shortName={item.mrp}
                  offerPrice={item.offerPrice}
                  date={item.updatedAt}
                  lisCode={item.name}
                  isPackage={true}
                  tests={item.tests}
                />
                </>
              )
            })
          ) : (
            <Layout />
          )}

          {/* <div className={categoryType}>
            <a className={active} href="#">
              All
            </a>
            <a href="#">Packages</a>
            <a href="#">Tests</a>
          </div>

          <div className={categoryBoxWrap}>
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
          </div> */}
          {/* <!-- category box ends here --> */}
        </div>
      </section>
    </>
  )
}

export default SearchDiv

