import React, { useState } from "react";
import {
  Box,
  Grid,
  Modal,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useLocation, useNavigate } from "react-router-dom";
import "./createUser.css";
import { TextingFields, submittedButton } from "./InputfieldFunctions";

const CreateUser = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const tabView1 = useMediaQuery("(min-width:1000px)");
  const padView = useMediaQuery("(min-width:600px)");
  const cardTemplateId = useLocation();
  const {  state: { cardId }  } = cardTemplateId;

  return (
    <>
      <Paper elevation={3} sx={{ margin: "25px" }}>
        <Box flexGrow={1} sx={{ position: "relative" }}>
          <div
            style={{
              backgroundColor: "white",
              filter: open ? "blur(3px)" : 1,
            }}
          >
            <Grid
              container
              sx={{
                padding: { xs: 3, sm: 4, md: 5 },
                rowGap: { xs: 2, md: 3 },
              }}
            >
              <Grid item xs={12} textAlign={"left"}>
                <Typography
                  fontFamily={"Montserrat-SemiBold"}
                  sx={{ fontSize: { xs: 13, sm: 15, md: 18, lg: 22 } }}
                >
                  Create Text & Media
                </Typography>
              </Grid>

              <Grid container spacing={{ xs: 2, sm: 3, md: 5 }}>
                <Grid item sm={6} xs={12}>
                  <TextingFields title={"Heading 01"} mb={3} />
                  <TextingFields title={"Heading 02"} />
                </Grid>

                <TextingFields
                  title={"Description 01"}
                  sm={6}
                  lg={6}
                  multiline={true}
                  inputProps={{
                    style: {
                      height: tabView1 ? "137px" : padView ? "110px" : "auto",
                    },
                  }}
                />
              </Grid>
              {cardId == "mediaCard" ? (
                <>
                  <Grid container spacing={{ xs: 2, sm: 3, md: 5 }}>
                    <TextingFields
                      title={"Landscape Marketing Image (1:9:1)"}
                      sm={6}
                      lg={4}
                    />
                    <TextingFields
                      title={"Portrait Marketing Image (4:5)"}
                      sm={6}
                      lg={4}
                    />
                    <TextingFields
                      title={"Square Marketing Image (1:1)"}
                      sm={6}
                      lg={4}
                    />
                  </Grid>

                  <TextingFields title="Video URL" xs={12} />
                </>
              ) : (
                 <> </>
              )}

              <Grid container spacing={{ xs: 2, sm: 3, md: 5 }}>
                <TextingFields title={"Business Name"} sm={6} lg={6} />
                <TextingFields
                  title={"Button Label"}
                  sm={6}
                  lg={6}
                  select={true}
                />
              </Grid>

              <TextingFields title={"Website URL"} />

              <Grid item xs={12} textAlign={"right"} paddingTop={cardId !== "mediaCard" ? 15 : 0} >
                <button
                  className="backButton"
                  onClick={() => {
                    navigate("/createAds");
                  }}
                >
                  Back
                </button>
                <button
                  className="nextButton"
                  onClick={() => {
                    setOpen(true);
                    setTimeout(() => {
                      navigate("/createAds");
                      setOpen(false);
                    }, 600);
                  }}
                >
                  Submit
                </button>
              </Grid>
            </Grid>
          </div>

          <Modal open={open} hideBackdrop>
            <Box sx={submittedButton} textAlign="center">
              <CheckCircleIcon color="primary" fontSize="large" />
              <Typography fontFamily={"Montserrat-SemiBold"} mb={1}>
                Submitted
              </Typography>
            </Box>
          </Modal>
        </Box>
      </Paper>
    </>
  );
};

export default CreateUser;
