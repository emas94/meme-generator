import { useState } from "react"
import { useMemeReducer } from "./memeReducer"
import { useMeme } from "./useMeme"
const AddMeme = ({ onSubmit }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("")

  let { state, dispatch } = useMeme()
  let meme = {
    id: state.meme.length + 1,
    title,
    description,
    url,
  }
  console.log(meme)
  return (
    <>
      <label>Title</label>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <label>Description</label>
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
      />
      <input
        type="file"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setDescription("")
          setTitle("")
          setUrl("")
          dispatch({ type: "addMeme", meme })
        }}
      >
        Add Meme
      </button>
    </>
  )
}

export default AddMeme
