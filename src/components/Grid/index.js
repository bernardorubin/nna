import React from 'react'
import styled from 'styled-components'

const CustomGrid = styled.div`
  height: 100px;
  display: grid;
  grid-template-areas: 'a a';
  grid-gap: 10px;
  grid-auto-columns: 200px;
`

const Item = styled.div`
  background-color: lime;
`


const Grid = () => {
  return (
    <CustomGrid>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </CustomGrid>
  )
}

export default Grid