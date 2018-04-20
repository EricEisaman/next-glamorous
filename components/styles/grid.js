const gridLayoutStyle = {
  // You can use @supports with glamor!
  // So you can use @supports with glamorous as well!
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: 10,
    gridTemplateAreas: `
      "header  header header"
      "sidebar content content"
      "sidebar content content"
      "sidebar content content"
      "sidebar content content"
      "footer  footer  footer"
    `,
    width: '98vw',
    height: '98vh'
  }
}
export default gridLayoutStyle;