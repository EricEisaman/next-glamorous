import React from 'react'
import Link from 'next/link';
import glamorous from 'glamorous'
import navStyle from './styles/nav'

class NavComponent extends React.Component{
  constructor(props) {
    super(props);
  }
  
	render() {
		return (
			<nav style={{cursor:'pointer',userSelect:'none'}}>
				<div>
					<div id="menuClick" onClick={this.burgerToggle}>></div>
					<div className="narrowLinks" style={{display:'none'}}>
						<Link href="/">
              <a onClick={this.burgerToggle} style={{textDecoration:'none',color:'#fff'}}>
                Home
              </a>
            </Link><br></br>
						<Link href="/hello">
              <a onClick={this.burgerToggle} style={{textDecoration:'none',color:'#fff'}}>
                Hello
              </a>
            </Link>
					</div>
				</div>
			</nav>
		);
	}
  
  componentDidMount() {
    // life cycle hook handler -- this runs client side
    let menuClick = document.querySelector('#menuClick');
    let linksEl = document.querySelector('.narrowLinks');
    menuClick.addEventListener('mouseenter',e=>{
      if (linksEl.style.display === 'none') {
        linksEl.style.display = 'block';
        menuClick.innerHTML = '\\\/'
      } 
    })
  }
  
	burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks');
    let menuClick = document.querySelector('#menuClick');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
      menuClick.innerHTML = '>'
		} else {
			linksEl.style.display = 'block';
      menuClick.innerHTML = '\\\/'
		}
	}
}

let factory = glamorous(NavComponent)
let GlamNavComponent = factory(navStyle);

export default GlamNavComponent