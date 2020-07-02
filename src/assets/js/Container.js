import PropTypes from 'prop-types'
import * as React from 'react'
import Loading from './loading';
// import children from './Child';
const Container = ({ children, isFinished, animationDuration }) => (
  <div 
    style={{
        width: `100%`,
        height: `100%`,
        top:`0`,
        backgroundColor: `var(--bg-header)`,
        position:`fixed`,
      opacity: isFinished ? 0 : 1,
      pointerEvents: 'none',
      left:0,
      zIndex: 11111111111111111111,
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
    <Loading/>
  </div>
)

Container.propTypes = {
  animationDuration: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  isFinished: PropTypes.bool.isRequired,
}

export default Container
