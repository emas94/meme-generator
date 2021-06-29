import { useEffect, useState } from "react"

import styled from "styled-components"
import AddMeme from "./AddMeme"
import { useMemeReducer } from "./memeReducer"
import { useMeme } from "./useMeme"
const MemeContainer = () => {
  let { state, dispatch } = useMeme()
  useEffect(() => {})

  return (
    <>
      <AddMeme></AddMeme>
      <MemeWrapper>
        {state.meme.map((m) => {
          return (
            <Meme
              onClick={() => dispatch({ type: "removeMeme", id: m.id })}
              style={{
                // background: `url(${m.url}) center no-repeat`,
                backgroundSize: "cover",
                backgroundColor: "red",
              }}
            >
              <Top>{m.title}</Top>
              <Bottom>{m.description}</Bottom>
            </Meme>
          )
        })}
      </MemeWrapper>
    </>
  )
}
const MemeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
const Meme = styled.div`
  position: relative;
  height: 400px;
  display: flex;
  justify-content: center;
  flex-basis: 40%;
  margin-bottom: 30px;
  color: white;
  font-size: 28px;
  font-weight: 600;
`
const Top = styled.p`
  position: absolute;
  top: 20px;
`
const Bottom = styled.p`
  position: absolute;
  bottom: 20px;
`

export default MemeContainer
