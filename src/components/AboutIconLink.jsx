import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='/about'>          {/* Link is used for links within the project - for external links the <a> tag is used */}
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink
