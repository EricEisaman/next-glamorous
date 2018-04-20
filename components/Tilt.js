import React from 'react';
import glamorous from 'glamorous'
import VanillaTilt from 'vanilla-tilt'
import totallyCenteredStyle from './styles/totallyCentered'
import tiltStyle from './styles/tilt'

class Tilt extends React.Component{
  componentDidMount(){
    VanillaTilt.init(this.rootNode,{
      max: 35,
      speed: 400,
      glare: false,
      'max-glare': 0.3,
      perspective: 600
    })
  }
  render(){
    return(
      <div 
        ref={node=>(this.rootNode=node)} 
        className="tilt-root">
        <div>
          <div style={{transform:'translateZ(50px)'}}{...this.props}/>
        </div>
      </div>
    )
  }
}

let factory = glamorous(Tilt)
let GlamTilt = factory(totallyCenteredStyle)

export default GlamTilt