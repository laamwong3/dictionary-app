import { Container, Stack, TextField, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";
import { Dictionary } from "./api/dictionary";

const Home: NextPage = () => {
  const [keyword, setKeyword] = useState<string>();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR<Dictionary>("/api/dictionary", fetcher);
  console.log(data);

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" p={5}>
          {keyword && keyword !== null ? keyword : "Dictionary"}
        </Typography>
        <Stack justifyContent="center" direction="row">
          <TextField
            label="Search a word"
            variant="outlined"
            sx={{ width: "50vw" }}
            placeholder="Keyword to search"
            value={keyword}
            onChange={(e) => {
              e.preventDefault();
              setKeyword(e.target.value);
            }}
          />
        </Stack>
      </Container>
    </>
  );
};

export default Home;
