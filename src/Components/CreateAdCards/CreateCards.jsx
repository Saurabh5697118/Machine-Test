import { Box, Button, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import "./cardAds.css";
import CardDetails from "./CardDetails";
import { useNavigate } from "react-router-dom";

const CreateCard = () => {
  const navigate = useNavigate();
  const [textCard, setTextCard] = useState(false);
  const [mediaCard, setMediaCard] = useState(false);
  return (
    <>
      <Paper elevation={3} sx={{ margin: "25px", backgroundColor: "white" }}>
        <Box flexGrow={1} position={"relative"}>
          <Grid
            container
            rowGap={3}
            sx={{
              padding: { xs: 3, sm: 4 },
            }}
          >
            <Grid item>
              <h4 style={{ margin: 0 }}>CREATE ADS</h4>
            </Grid>

            <Grid item xs={12} padding={5}>
              <Grid
                container
                sx={{ justifyContent: "center", gap: { lg: 10, sm: 8, xs: 5 } }}
              >
                <CardDetails
                  id="textCard"
                  textCard={textCard}
                  textAd={true}
                  onClick={() => {
                    setTextCard(!textCard);
                    setMediaCard(false);
                  }}
                />
                <CardDetails
                  id="mediaCard"
                  mediaCard={mediaCard}
                  onClick={() => {
                    setMediaCard(!mediaCard);
                    setTextCard(false);
                  }}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} textAlign={"right"}>
              <button
                className="nextButton"
                onClick={() => {
                  if (textCard || mediaCard) {
                    navigate("/createUser", {
                      state: {
                        cardId:
                          (textCard && "textCard") ||
                          (mediaCard && "mediaCard"),
                      },
                    });
                  }
                }}
              >
                Next
              </button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default CreateCard;
