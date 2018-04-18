import React from 'react';
import { rehydrate, css } from 'glamor'
import glamorous from 'glamorous'
import Container from '../components/Container'
import Grid from '../components/Grid'
import Box from '../components/BasicBox'
import Nav from '../components/NavComponent'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

class HelloPage extends React.Component {
  static getInitialProps ({ query: { name } }) {
    return { name };
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
        <Grid>
          <Box css={{ gridArea: 'header' }}><Nav/></Box>
          <Box css={{ gridArea: 'sidebar' }}>Sidebar</Box>
          <Box css={{ gridArea: 'content' }}>
            <h1>Hello {this.props.name || 'mysterious person'}!</h1>
          </Box>
          <Box css={{ gridArea: 'footer' }}>Footer</Box>
        </Grid>
      </Container>
    );
  }
}

export default HelloPage;