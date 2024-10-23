import { Link } from "react-router-dom"

function About() {
  return (
    <div className='card'>
      About
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </div>
  )
}

export default About
