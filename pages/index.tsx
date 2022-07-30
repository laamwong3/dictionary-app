import { Container, Stack, TextField, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";
import { DefinitionCard } from "../components";
import { useSearchBarContext } from "../contexts/SearchBarContext";
import { Dictionary } from "./api/dictionary";

const Home: NextPage = () => {
  const { keyword, setKeyword } = useSearchBarContext();

  return (
    <>
      <Container maxWidth="lg">
        <Stack
          // direction="column"
          // justifyContent={"space-between"}
          height={"100vh"}
          gap={3}
        >
          <Typography variant="h1" textAlign="center" p={2}>
            {keyword && keyword !== null ? keyword : "Dictionary"}
          </Typography>
          <Stack justifyContent="center" direction="row">
            <TextField
              label="Search a word"
              variant="outlined"
              sx={{ width: { xs: "100%", md: "50vw" } }}
              placeholder="Keyword to search"
              value={keyword}
              onChange={(e) => {
                e.preventDefault();
                setKeyword(e.target.value);
              }}
            />
          </Stack>
          <DefinitionCard />
        </Stack>
      </Container>
    </>
  );
};

export default Home;
