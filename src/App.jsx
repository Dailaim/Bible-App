
import { BibleChapter } from './components/BibleChapter'
import './App.css'
import BibleBook from './components/BibleBook'

function App() {
  return (
    <>
      {/* <BibleChapter book="Exodo" chapter={10} /> */}
      <BibleBook bookName="Genesis" />
    </>
  )
}

export default App
