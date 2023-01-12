import { useEffect, useState } from "react"

export function BibleChapter({ book, chapter }) {
  const bibleApi = 'https://bible-api.deno.dev'

  if ( chapter < 1 ) throw new Error('No debe ser menor a 1 el capitulo') 
  const [loadingChapter, setloadingChapter] = useState(true)
  const [verses, setVerses] = useState([])

  useEffect(() => {
    fetch(`${bibleApi}/book/${book.toLowerCase()}/${chapter}`).then((d) => d.json()).then((d) => {
      setVerses(d)
      setloadingChapter(false)
    })
  }) 

  if ( loadingChapter ) {
    return (
      <h2>Cargando versiculos...</h2>
    )
  }

  return (
    <>
      <h1>Es el capitulo {chapter} del libro {book}</h1>
      {
        verses.map((v) => {
          return (
            <p key={v.verse}>{v.verse}</p>
          )
        })
      }
    </>
  )
}
