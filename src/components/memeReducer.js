import { useReducer } from "react"
import { toast } from "react-toastify"

const reducer = (state, action) => {
  switch (action.type) {
    case "getAll":
      return state
    case "setMeme":
      return { ...state, meme: action.meme }
    case "addMeme":
      if (action.meme.title.length > 2 || action.meme.description.length > 2) {
        return {
          ...state,
          meme: [action.meme, ...state.meme],
        }
      } else {
        toast.warning("Fields are empty")
      }
    case "removeMeme":
      let newState = state.meme.filter((element) => element.id !== action.id)
      return {
        meme: newState,
      }
    default:
      throw new Error()
  }
}
export const useMemeReducer = () => useReducer(reducer, { meme: [] })
