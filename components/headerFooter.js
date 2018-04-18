import glamorous from 'glamorous'
import gridLayoutStyle from './styles/gridLayout'

const Box = glamorous.div({
  backgroundColor: '#444',
  color: '#fff',
  borderRadius: 5,
  padding: 10,
  fontSize: '150%',
});

const HeaderFooter = (...styles)=>glamorous(Box)(...styles);