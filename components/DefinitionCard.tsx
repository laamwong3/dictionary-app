import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dictionary } from "../pages/api/dictionary";
import useSWR from "swr";
import { useSearchBarContext } from "../contexts/SearchBarContext";
import { Divider } from "@mui/material";

export default function DefinitionCard() {
  const { keyword, setKeyword } = useSearchBarContext();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<Dictionary[]>(
    `/api/dictionary?keyword=${keyword}`,
    fetcher
  );
  console.log(data);
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          minWidth: 275,
          height: "70vh",
          overflowY: "scroll",
          scrollbarWidth: "thin",
          border: "10px solid rgb(105,105,105)",
          borderRadius: 5,
        }}
        // elevation={12}
      >
        <CardContent>
          {data &&
            data instanceof Array &&
            data.map((dictionary) =>
              dictionary.meanings?.map((meaning) =>
                meaning.definitions?.map((definition, index) => (
                  <Card key={index} sx={{ m: 1, borderRadius: 5 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h4">
                        <Box
                          component={"span"}
                          fontWeight="bold"
                          color="blueviolet"
                        >
                          Definition:{" "}
                        </Box>
                        {definition.definition}
                      </Typography>
                      <Divider sx={{ marginY: 2 }} />
                      <Typography
                        variant="h6"
                        gutterBottom
                        fontStyle={"italic"}
                      >
                        <Box component={"span"} fontWeight="bold" color="red">
                          Example:{" "}
                        </Box>
                        {definition.example}
                      </Typography>
                      <Typography
                        gutterBottom
                        fontStyle={"italic"}
                        variant="h6"
                      >
                        <Box component={"span"} fontWeight="bold" color="green">
                          Synonyms :{" "}
                        </Box>
                        {meaning.synonyms?.map((synonym) => synonym + " ")}
                      </Typography>
                      <Typography
                        gutterBottom
                        fontStyle={"italic"}
                        variant="h6"
                      >
                        <Box
                          component={"span"}
                          fontWeight="bold"
                          color="yellow"
                        >
                          Antonyms :{" "}
                        </Box>
                        {meaning.antonyms?.map((antonym) => antonym + " ")}
                      </Typography>
                    </CardContent>
                  </Card>
                ))
              )
            )}
        </CardContent>
      </Card>
    </Box>
  );
}
