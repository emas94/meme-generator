import { useState } from "react"
import { useMeme } from "./useMeme"
import styled from "styled-components"
import DragMove from "./DragMove"
const AddMeme = ({ onSubmit }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("")
  const [isDragging, setIsDragging] = useState(false)
  const [isDraggingBottom, setIsDraggingBottom] = useState(false)
  const [translateTop, setTranslateTop] = useState({
    x: 0,
    y: 0
  });
  const [translateBottom, setTranslateBottom] = useState({
    x: 0,
    y: 0
  });

  const handleDragMoveTop = (e) => {
    setIsDragging(true)
    setTranslateTop({
      x: translateTop.x + e.movementX,
      y: translateTop.y + e.movementY
    });
  };
  const handleDragMoveBottom = (e) => {
    setIsDraggingBottom(true)
    setTranslateBottom({
      x: translateBottom.x + e.movementX,
      y: translateBottom.y + e.movementY
    });
  };
  let { state, dispatch } = useMeme()
  let meme = {
    id: state.meme.length + 1,
    title,
    description,
    url,
    top: translateTop,
    bottom: translateBottom
  }
  return (
    <>
      <Wrapper>
        <div>
          <NewMeme url={url} style={{
            background: url.length > 10 ? `url(${url}) center no-repeat` : "gray",
            backgroundSize: "contain",
            backgroundColor: "rgba(70, 83, 98, 0.7)"
          }}

          >
            <DragMove onDragMove={handleDragMoveTop} style={{
              transform: `translateX(${translateTop.x}px) translateY(${translateTop.y}px)`,
            }}>

              <TextContent style={{
                border: isDragging ? "2px dashed black" : '0'
              }}
              >
                {title}</TextContent>
            </DragMove>
            <DragMove onDragMove={handleDragMoveBottom} style={{
              transform: `translateX(${translateBottom.x}px) translateY(${translateBottom.y}px)`,
            }} >
              <TextContent position="bottom: 20px" style={{
                border: isDraggingBottom ? "2px dashed black" : '0'
              }}>{description}</TextContent>
            </DragMove>
          </NewMeme>
          <AddButton
            onClick={() => {
              setDescription("")
              setTitle("")
              setUrl("")
              setIsDragging(false)
              setIsDraggingBottom(false)
              dispatch({ type: "addMeme", meme, })
            }}
          >
            Add Meme
          </AddButton>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>


          <label
            style={{ margin: 10, marginLeft: 0 }}>Title</label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <label
            style={{ margin: 10, marginLeft: 0 }}>Description</label>
          <input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
          <label
            style={{ margin: 10, marginLeft: 0 }}>URL to background</label>
          <input
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value)
            }}
          />
        </div>

      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
display: flex;
justify-content: center;
margin-bottom: 50px;
`
const AddButton = styled.button`
background: transparent;
padding: 5px 10px;
border-radius: 15px;
border: 1px solid black;
margin-top: 15px;
font-weight: 500;
transition: .3s;
cursor: pointer;
&:hover, &:focus{
background: black;
color: white;
}
`
const NewMeme = styled.div`
height:300px;
width: 300px;
border: 1px solid black;
margin-right: 30px;
position: relative;
opacity: 0.8;
`
const TextContent = styled.p`
position: absolute;
text-align: center;
color: white;
width: auto;
font-weight: 600;
font-size: 24px;
padding: 10px 20px;
${props => props.position ? props.position : null}
cursor: grab;
`

export default AddMeme
