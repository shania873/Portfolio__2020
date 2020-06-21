import * as React from 'react'
import { Blob } from 'react-blob'

const Avatar = ({src, alt}) =>
  <Blob size="100px" src={src} alt={alt}/>

const FunnyLinkButton = ({href, ...props}) =>
  <a href={href}><Blob size="2em" {...props}/></a>

const BackgroundBlob = ({style, props}) =>
  <Blob size="50vh"
    // style={{
    //     position: 'absolute',
    //     top: '-15%',
    //     right: '-15%',
    //     zIndex: -1,
    //     backgroundColor: 'rgb(103, 103, 103)',
    //     color: 'white',
    //     opacity: 0.05,
    //     fontSize: '50vh',
    //     ...style
    // }}
    className="img-fluid Blob_Shape"
    {...props}
  />

  export default BackgroundBlob;