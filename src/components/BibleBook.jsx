import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function BibleBook({ bookName }) {
  const bibleApi = "https://bible-api.deno.dev";

  const { data, error, isLoading } = useSWR(
    `${bibleApi}/book/${bookName.toLowerCase()}`,
    fetcher
  );

  if (error) {
    return <div> error</div>;
  }

  if (isLoading) {
    return <div> is loading....</div>;
  }

  return (
    <div>
      {data.map((datum) => (
        <div key={datum?.chapter}>
          <h1>Capítulo: {datum?.chapter}</h1>
          <div>
            {datum.vers.map((dat) => (
              <div key={dat.number}>
                <h3>Versículo: {dat.number}</h3>
                <p>{dat.verse}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
