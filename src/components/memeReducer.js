import { useReducer } from "react"
import { toast } from "react-toastify"
const initialMeme = [
  {
    id: 1,
    title: "Mega śmieszny meme",
    description: "Hahahahhahahahahaha",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8aobbSpnDJq9eb9NyUlbUQ-MelBINZArWIw&usqp=CAU",
  },
  {
    id: 2,
    title: "Mega śmieszny meme2",
    description: "Hahahahhahahahahaha2",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8aobbSpnDJq9eb9NyUlbUQ-MelBINZArWIw&usqp=CAU",
  },
]

const reducer = (state, action) => {
  switch (action.type) {
    case "getAll":
      return state
    case "setMeme":
      return { ...state, meme: action.meme }
    case "addMeme":
      console.log(state)
      if (action.meme.title.length > 2 || action.meme.description.length > 2) {
        return {
          ...state,
          meme: [...state.meme, action.meme],
        }
      } else {
        toast.warning("Fields are empty")
      }
    case "removeMeme":
      console.log(action.id)
      let newState = state.meme.filter((element) => element.id !== action.id)
      console.log(newState)
      return {
        meme: newState,
      }

    case "setNewMeme":
      return { ...state, newMeme: action.meme }
    default:
      throw new Error()
  }
}
export const useMemeReducer = () => useReducer(reducer, { meme: initialMeme })
