import React from "react"
import styled from "styled-components"
const Main = ({ children }) => {
  return (
    <>
      <Wrapper>
        {/* <Header></Header>
        <Sidebar></Sidebar> */}
        <div>{children}</div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  width: 100vw;
`
const Header = styled.header`
  /* position: absolute; */
  height: 150px;
  width: 100%;
  border: 5px solid gold;
  top: 0;
  left: 0;
`
const Sidebar = styled.div`
  /* position: absolute; */
  width: 150px;
  height: 100vh;
  border: 5px solid gold;
  top: 0;
  left: 0;
`
export default Main
