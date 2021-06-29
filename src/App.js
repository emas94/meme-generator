import "./App.css"
import Main from "./components/Main"
import MemeContainer from "./components/memeContainer"
import { MemeProvider } from "./components/useMeme"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from "react-toastify"
import { UseNemeConvo } from "./components/UseMemeConvo"
function App() {
  UseNemeConvo()
  return (
    <Main>

      <h1 style={{ textAlign: 'center' }}>Generate your meme</h1>
      <MemeContainer></MemeContainer>
      <ToastContainer></ToastContainer>
    </Main>
  )
}
export const AppContainer = () => {
  return (
    <MemeProvider>
      <App />
    </MemeProvider>
  )
}
export default App
