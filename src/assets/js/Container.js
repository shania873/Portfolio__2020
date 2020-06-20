import PropTypes from 'prop-types'
import * as React from 'react'

const Container = ({ children, isFinished, animationDuration }) => (
  <div
    style={{
        width: `100%`,
        height: `100vh`,
        backgroundColor: `black`,
        position:`absolute`,
      opacity: isFinished ? 0 : 1,
      pointerEvents: 'none',
      zIndex: 11111111111111111111,
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
)

Container.propTypes = {
  animationDuration: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  isFinished: PropTypes.bool.isRequired,
}

export default Container
