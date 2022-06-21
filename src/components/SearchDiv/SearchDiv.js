import React from "react"
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

const SearchDiv = () => {
  return (
    <>
      <div className={halfImage}>
        <img src={bgImage} alt="" />
      </div>
      <section>
        <div className={logo}>
          <a href="/">
            <img width="60px" height="70px" src={Logo} alt="logo" />
          </a>
        </div>
        <div className={bookTestDiv}>
          <a href="/">
            <img width="25px" height="25px" src={back} alt="back" />
          </a>
          &nbsp; &nbsp;
          <h2>Book a test</h2>
        </div>
        <hr style={{ width: "80%" }} />
        <div className={searchDiv}>
          <form action="/" method="post">
            <div>
              <img width="10px" height="10px" src={search} alt="search" />
              <input
                type="text"
                placeholder="Search for a test or package by name"
              />
            </div>
            <button className={btn}>Search</button>
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
          <div>
            <Layout />
          </div>

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
