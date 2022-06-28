import { Link } from "gatsby"
import {
  categoryBox, left, btn, right,
} from "./Card.module.css"

export default PackageCard = ({
  fullName,
  testType,
  lisCode,
  shortName,
  date,
  id,
}) => {
  return (

      <div className={categoryBox}>
        <div className={left}>
          <h4>{fullName}</h4>
          <h5>{testType}</h5>
          <h3>
              Rs. 500
            </h3>
            <h6>✓ {fullName}</h6>
            <h6>✓ {shortName}</h6>
            <h6>✓ {testType}</h6>
            <h6>✓ {lisCode}</h6>
            <h6>✓ {date}</h6>

          <div>
          <Link
            to="/description"
            className={cardDescriptionSeeMore}
            state={{
              fullName: fullName,
              shortName: shortName,
              testType: testType,
              lisCode: lisCode,
              date: date,
            }}
          >
            See all details...
          </Link>
          </div>
          <Link
              to="description"
              className={buttonText}
              state={{
                fullName: fullName,
                shortName: shortName,
                testType: testType,
                lisCode: lisCode,
                date: date,
              }}
            >
              <button className={btn}>Book now</button>
            </Link>
          
        </div>
        <div className={right}>
          <img
            style={{ borderRadius: "50%" }}
            width="50px"
            height="50px"
            src={img}
            alt="avatar"
          />
        </div>
      </div>

  )
}
