import {
  Container,
  CssBaseline,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";
import { DarkModeSwitch, DefinitionCard } from "../components";
import darkTheme from "../config/darkTheme";
import lightTheme from "../config/lightTheme";
import { useColorModeContext } from "../contexts/ColorModeContext";
import { useSearchBarContext } from "../contexts/SearchBarContext";
import { Dictionary } from "./api/dictionary";

const Home: NextPage = () => {
  const { keyword, setKeyword } = useSearchBarContext();
  const { darkMode } = useColorModeContext();

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <DarkModeSwitch />
          <Stack
            // direction="column"
            // justifyContent={"space-between"}
            height={"100vh"}
            gap={3}
          >
            <Typography
              // sx={{ fontSize: { xs: 10, sm: 12, md: 14, lg: 16, xl: 28 } }}
              variant="h1"
              textAlign="center"
              p={2}
            >
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
      </ThemeProvider>
    </>
  );
};

export default Home;
