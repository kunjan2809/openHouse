import { about } from "./constant/string"
import './assets/scss/about.scss'
import { useScrollToTop } from "../../common/hooks/general"

const About = () => {

  useScrollToTop()

  return (
    <>
    <div className="about-container">
      <h1 className="title">{about.title}</h1>
      <div className="description-wrapper">
        <p>{about.para1}</p>
        <p>{about.para2}</p>
        <p>{about.para3}</p>
      </div>
    </div>
    </>
  )
}

export default About