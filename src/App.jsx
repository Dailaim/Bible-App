
import { BibleChapter } from './components/BibleChapter'
import './App.css'
import BibleBook from './components/BibleBook'

function App() {
  return (
    <>
      {/* <BibleChapter book="Exodo" chapter={10} /> */}
      <BibleBook book="Genesis" />
    </>
  )
}

export default App
