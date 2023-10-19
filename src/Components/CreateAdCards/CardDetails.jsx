import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Checkbox,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Skeleton from "@mui/material/Skeleton";

import MenuIcon from "@mui/icons-material/Menu";
import "./cardAds.css";
import { dummyImages } from "../../Constants/DummyImageData";

const CardDetails = ({
  textAd = false,
  onClick,
  id,
  textCard = false,
  mediaCard = false,
}) => {
  

  return (
    <Card
      sx={{
        pt: 1,
        boxShadow: "1px 2px 8px #b3b3b3",
        borderRadius: 3,
        height: "auto",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Checkbox
        sx={{
          "& .MuiSvgIcon-root": { fontSize: { xs: 20, sm: 30 } },
        }}
        checked={
          (id == "textCard" && textCard) || (mediaCard && id == "mediaCard")
        }
      />
      <CardContent sx={{ padding: "0px 10%" }}>
        <Card
          sx={{
            maxWidth: 380,
            borderRadius: "30px 30px 0px 0px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: {
                xs: "8px 8px 0px",
                sm: "8px 8px 0px",
                md: "8px 16px 0px",
              },
            }}
          >
            <button
              style={{
                height: 20,
                width: 20,
                borderRadius: 50,
                border: "1px #E0E0E0 solid",
                backgroundColor: "transparent",
              }}
            />
          </CardContent>
          <Card sx={{ m: 2, mb: 0, height: { md: 330, xs: 270 } }}>
            <CardHeader
              sx={{ backgroundColor: "#E8E8E8", padding: 0.5 }}
              avatar={
                <IconButton>
                  <MenuIcon
                    sx={{
                      fontSize: {
                        xs: "small",
                        sm: "medium",
                        md: "large",
                      },
                    }}
                  />
                </IconButton>
              }
              action={
                <IconButton>
                  <SearchIcon
                    sx={{
                      fontSize: {
                        xs: "small",
                        sm: "medium",
                        md: "large",
                      },
                    }}
                  />
                </IconButton>
              }
              title={
                <Skeleton
                  animation="wave"
                  width="60%"
                  sx={{
                    margin: "0 auto",
                    height: { xs: 8, sm: 10, md: 13 },
                  }}
                />
              }
            />
            <CardContent sx={{ padding: "5px 16px" }}>
              <Skeleton
                animation="wave"
                sx={{ height: { xs: 8, sm: 10, md: 13 } }}
              />
              <Skeleton sx={{ height: { xs: 8, sm: 10, md: 13 } }} />
              <Skeleton sx={{ height: { xs: 8, sm: 10, md: 13 } }} />
              <Skeleton
                animation="wave"
                sx={{ height: { xs: 8, sm: 10, md: 13 } }}
                width="80%"
              />
            </CardContent>

            <CardContent
              sx={{
                paddingTop: 0,
                paddingBottom: 0,
                maxHeight: 150,
              }}
            >
              {textAd ? (
                <CardContent
                  sx={{
                    border: "1px #E8E8E8 solid",
                    borderRadius: 2,
                    minWidth:65,
                    maxHeight: 150,
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: 8 },
                      textOverflow: "ellipsis",
                      overflow: { xs: "hidden", sm: "visible" },
                      whiteSpace: { xs: "nowrap", sm: "normal" },
                    }}
                    component={'div'}
                  >
                    <a style={{ textDecoration: "none" }}>
                      100-B1DBNC2 | is stock and ready to ship | Great Member
                      Rewards Program
                    </a>
                    <br />
                    <a
                      style={{
                        textDecoration: "none",
                        color: "green",
                        display: "flex",
                        height: "10px",
                        gap: 4,
                      }}
                    >
                      <span style={{ border: "1px green solid" }}>Ad</span>
                      Cosmostyle.in
                    </a>
                    <hr />
                    The Most Trusted Name in Cosmetics. Fast, Free Shipping on a
                    Huge Selection. Use Promo Code FIRSTFREE to save 20% at
                    checkout. Join our Family of Satisfied Customers.
                  </Typography>
                </CardContent>
              ) : (
                <CardContent
                  sx={{
                    padding: 0,
                  }}
                >
                  <ImageList
                    variant="masonry"
                    sx={{
                      overflow: "hidden",
                      display: "flex",
                      flexWrap: "wrap",
                      maxHeight: 150,
                      margin: 0,
                    }}
                  >
                    {dummyImages.map((item) => (
                      <ImageListItem key={item.img}>
                        <img
                          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                          alt={item.title}
                          loading="lazy"
                          height={40}
                          width={40}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </CardContent>
              )}
            </CardContent>

            {textAd ? (
              <CardContent sx={{ padding: "5px 16px" }}>
                <Skeleton
                  animation="wave"
                  sx={{ height: { xs: 8, sm: 10, md: 13 } }}
                />
                <Skeleton
                  animation="wave"
                  sx={{ height: { xs: 8, sm: 10, md: 13 } }}
                />
                <Skeleton sx={{ height: { xs: 8, sm: 10, md: 13 } }} />
                <Skeleton
                  animation="wave"
                  sx={{ height: { xs: 8, sm: 10, md: 13 } }}
                  width="80%"
                />
              </CardContent>
            ) : null}
          </Card>
        </Card>
      </CardContent>
      <CardContent
        sx={{
          backgroundColor: "#F5F5F5",
          margin: "0px 2px 2px 2px",
          borderRadius: "0px 0px 10px 10px",
          padding: 1,
        }}
      >
        <Typography
          textAlign={"center"}
          fontSize={{ xs: 5, sm: 10, md: 15 }}
          fontFamily={"Montserrat-Light"}
        >
          Create
        </Typography>
        <Typography
          textAlign={"center"}
          fontSize={{ xs: 10, sm: 15, md: 20 }}
          fontFamily={"Montserrat-Bold"}
        >
          {textAd ? "Text Ad" : "Media Ad"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDetails;
