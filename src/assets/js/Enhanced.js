import Bar from './Bar'
import Container from './Container'
import React from 'react'
import Spinner from './Spinner'
import { render } from 'react-dom'
import { withNProgress } from '@tanem/react-nprogress'

const Inner = ({ animationDuration, isFinished, progress }) => (
  <Container animationDuration={animationDuration} isFinished={isFinished}>
    <Bar animationDuration={animationDuration} progress={progress} />
    <Spinner />
  </Container>
)

const Enhanced = withNProgress(Inner)

render(<Enhanced isAnimating />, document.getElementById('root'))