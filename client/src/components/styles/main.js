import styled from 'styled-components';
import {Segment, Grid, Menu} from "semantic-ui-react"


const side = (side) => {
  switch(side) {
    case 'topleft':
      return '10px 0 10px 0';
    case 'topright':
      return '0 10px 0 10px';
    default:
      return '10px';
  }
}


const talign = (talign) => {
  switch(talign) {
    case 'center':
      return 'center';
    case 'right':
      return 'right';
    default:
      return 'left';
  }
}

const color = (color) =>{
  switch (color) {
    case 'red':
    return 'red';
    case 'orange':
    return 'orange';
    case 'blue':
    return 'blue';
    case 'green':
    return 'green';
    default:
    return 'grey';
  }
}

export const SMenu = styled(Menu) `
  position: fixed;
  width: 100%;
  z-index: 1;
`

export const StyledSegment = styled(Segment)`
  margin: 50px;
  height: auto;
  min-height: 300px;
  width: 300px;
  background: rgba(255, 255, 255, .8) !important;

  `

export const StyledGrid = styled(Grid.Column)`
margin: 10px;
height: auto;
min-height: 300px;
width: 300px !important;
`

export const Segment2 = styled(Segment)`
height: 200px;
width: 100% !important;
`

export const Content = styled.div`
  display: flex;
  padding: 0px 20px 10px 20px ;
  height: auto;
  text-align: ${props => talign(props.talign)};
`

export const SItem = styled.div`
  border-radius: 10px;
  width: 500px;
  height: auto;
  background: rgba(255, 255, 255, .8) !important;
  text-align: left;
  box-shadow: 10px 10px rgba(128, 128, 128, .5);
  margin-bottom: 20px;
`
export const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${props => color(props.color)};
  height: 40px;
  width: 40px;
  border-radius: ${props => side(props.side)};
`

export const PHIBlock = styled.div `
  height: 500px;
  width: 300px;
  background: grey;
  border: 2px solid black;
  position: fixed;
  right: 400px;

`

export const Options = styled.div`
  display: flex;
  justify-content: space-between;  
  border-radius: 10px;
`

export const SDiv = styled.div`
  border-radius: 10px;
  width: 300px;
  height: auto;
  min-height: 100px;
  background: rgba(255, 255, 255, .8) !important;
  text-align: ${props => talign(props.talign)};
  box-shadow: 10px 10px rgba(128, 128, 128, .5);
  margin: 0 auto 20px auto;
  padding-bottom: 20px;
  margin-top: 20px;
`

export const BGround = styled.div`
  height: 100vmax !important;
	margin:0;
	padding:0;
	font-family:"arial",heletica,sans-serif;
	font-size:12px;
    background: #2980b9 url('https://static.tumblr.com/03fbbc566b081016810402488936fbae/pqpk3dn/MRSmlzpj3/tumblr_static_bg3.png') repeat 0 0;
	-webkit-animation: 10s linear 0s normal none infinite animate;
	-moz-animation: 10s linear 0s normal none infinite animate;
	-ms-animation: 10s linear 0s normal none infinite animate;
	-o-animation: 10s linear 0s normal none infinite animate;
	animation: 10s linear 0s normal none infinite animate;
 
@-webkit-keyframes animate {
	from {background-position:0 0;}
	to {background-position: 500px 0;}
}
 
@-moz-keyframes animate {
	from {background-position:0 0;}
	to {background-position: 500px 0;}
}
 
@-ms-keyframes animate {
	from {background-position:0 0;}
	to {background-position: 500px 0;}
}
 
@-o-keyframes animate {
	from {background-position:0 0;}
	to {background-position: 500px 0;}
}
 
@keyframes animate {
	from {background-position:0 0;}
	to {background-position: 500px 0;}
}`