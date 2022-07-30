// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface Dictionary {
  word?: string;
  phonetics?: Phonetic[];
  meanings?: Meaning[];
  license?: License;
  sourceUrls?: string[];
}

export interface License {
  name?: string;
  url?: string;
}

export interface Meaning {
  partOfSpeech?: string;
  definitions?: Definition[];
  synonyms?: string[];
  antonyms?: string[];
}

export interface Definition {
  definition?: string;
  synonyms?: string[];
  antonyms?: string[];
  example?: string;
}

export interface Phonetic {
  audio?: string;
  sourceUrl?: string;
  license?: License;
  text?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Dictionary>
) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => res.status(200).json(data))
    .catch((e) => console.log(e));
}
