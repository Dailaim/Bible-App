import { useEffect, useState } from "react"



export default function BibleBook({bookName}){
  const bibleApi = 'https://bible-api.deno.dev'

  const [loadingChapter, setloadingChapter] = useState(true)
  const [book, setBook] = useState([])

  useEffect(() => {
    fetch(`${bibleApi}/book/${bookName.toLowerCase()}`).then((d) => d.json()).then((book) => {
      setBook(book)
    }).catch((err) => {
      throw err
    })
  })

  

  return (
    <h1>
      book
    </h1>
  )

}


