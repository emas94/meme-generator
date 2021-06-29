import styled from "styled-components"
import AddMeme from "./AddMeme"
import { useMeme } from "./useMeme"
const MemeContainer = () => {
  let { state, dispatch } = useMeme()

  return (
    <>
      <AddMeme></AddMeme>
      <MemeWrapper>
        {state.meme.length > 0 ? state.meme.map((m) => {
          return (
            <Meme
              style={{
                background: m.url.length > 10 ? `url(${m.url}) center no-repeat` : "rgba(70, 83, 98, 0.7)",
                backgroundSize: "cover",
              }}
            >
              <Remove onClick={() => dispatch({ type: "removeMeme", id: m.id })}>X</Remove>
              <TextContent style={{ top: m.top ? `${m.top.y}px` : `20px`, left: m.top !== 0 ? `${m.top.x}px` : `auto` }}>{m.title}</TextContent>
              <TextContent style={{ bottom: m.bottom ? `${m.bottom.y}px` : `20px`, left: m.bottom !== 0 ? `${m.bottom.x}px` : `auto` }}>{m.description}</TextContent>
            </Meme>
          )
        }) : <p style={{ textAlign: 'center', fontSize: 20, fontWeight: 600 }}>Loading...</p>}
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
  height: 300px;
  width: 300px;
  max-width: 300px;
  display: flex;
  justify-content: center;
  flex-basis: 40%;
  margin-bottom: 30px;
  color: white;
  font-size: 18px;
  font-weight: 600;
`
const TextContent = styled.p`
  position: absolute;
  text-shadow: 5px 5px 10px black;
`

const Remove = styled.div`
position: absolute;
height: 25px;
width: 25px;
border-radius: 100%;
background: white;
color: black;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
right:15px;
top:  15px;
cursor: pointer;
transition: .3s;
&:hover{
  background: black;
  color: white;
}
`

export default MemeContainer
