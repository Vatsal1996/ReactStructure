import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="" target="_blank" rel="noopener noreferrer">
          Ready for use
        </a>
        <span className="ms-1">&copy; 2022 .</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered for</span>
        <a href="" target="_blank" rel="noopener noreferrer">
         Direct use  &amp; Structure Dashboard Template
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
