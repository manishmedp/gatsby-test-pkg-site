import React from "react"
import { useState } from "react"
import Card from "../Card/Card"
import { cards, cardItems, pagination } from "./AllMenuItems.module.css"
import Pagination from "@mui/material/Pagination"

const All_Items = ({ testData, packageData }) => {
  const totalPages = Math.ceil((testData.length + packageData.length) / 6)
  const totalTestPages = Math.ceil(testData.length / 6)
  const [currentItems, setCurrentItems] = useState(testData.slice(0, 6))
  const [currentPageNumber, setCurrentPageNumeber] = useState(1)

  const handlePaginationChange = (event, value) => {
    setCurrentPageNumeber(value)

    if (value > totalTestPages) {
      setCurrentItems(packageData.slice(0, 6))
      console.log(currentPageNumber)
    }
    if (value <= totalTestPages) {
      setCurrentItems(testData.slice((value - 1) * 6, (value - 1) * 6 + 6))
    }
  }
  return (
    <main className={cards}>
      <div className={cardItems}>
        {currentPageNumber > totalTestPages &&
          currentItems.map(data => {
            return (
              <Card
                key={data.id}
                id={data.id}
                fullName={data.name}
                shortName={data.mrp}
                offerPrice={data.offerPrice}
                date={data.updatedAt}
                lisCode={data.name}
                data={data}
                isPackage={true}
                tests={data.tests}
              />
            )
          })}
        {!(currentPageNumber > totalTestPages) &&
          currentItems.map(data => {
            return (
              <Card
                key={data.id}
                testPrice={data.price}
                fullName={data.fullName}
                testType={data.testType}
                lisCode={data.lisCode}
                date={data.updatedAt}
                data={data}
                istest={true}
              />
            )
          })}
      </div>
      <div className={pagination}>
        <Pagination
          count={totalPages}
          siblingCount={0}
          boundaryCount={1}
          size="large"
          onChange={handlePaginationChange}
        />
      </div>
    </main>
  )
}

export default All_Items
