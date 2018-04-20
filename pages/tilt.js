import React from 'react';
import Container from '../components/Container'
import Tilt from '../components/Tilt'
import Box from '../components/BasicBox'
import Nav from '../components/Nav'

class TiltPage extends React.Component {
  static getInitialProps ({ query: { input } }) {
    return { input };
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // life cycle hook handler -- this runs client side
  }
  
  showSettings(e){
    e.preventDefault()
  }
  
  render() {
    return (
      <Container>
       <Box style={{height:'95vh'}}>
       <Nav/>
       <Tilt style={{backgroundColor:'#af361d',width:'800px',height:'400px',borderRadius:20,marginTop:30,padding:'20px'}}>
        <img src="http://coachesaid.com/Content/Mascots/me-meelhs-letter-150.png"/>
         <div style={{marginLeft:'auto',marginRight:'auto'}}>
          <h1 style={{color:'white',fontSize:100,transform:'translateZ(100px)'}}>{this.props.input || 'Go Eddies!'}</h1>
         </div>
       </Tilt>
       </Box>
      </Container>
    );
  }
}
export default TiltPage;