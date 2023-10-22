import {
  Grid,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "./createUser.css";
import { fontFamilies, pageView } from "../../Constants/FontConstants";

export const TextingFields = ({
  title,
  sm = 12,
  lg = 12,
  select = false,
  multiline = false,
  inputProps = {},
  mb = 0,
}) => {
  const tabViewMax = useMediaQuery(pageView.tabViewMax);

  return (
    <Grid item xs={12} sm={sm} lg={lg} textAlign={"left"} mb={mb}>
      <Typography
        fontFamily={fontFamilies.semiBold}
        sx={{
          fontSize: { xs: 11, sm: 12, md: 15, lg: 18 },
          mb: { xs: 0.5, sm: 1, md: 1.5 },
        }}
      >
        {title}
      </Typography>
      {!select ? (
        <TextField
          multiline={multiline}
          inputProps={inputProps}
          fullWidth
          size={tabViewMax ? "large" : "small"}
          InputProps={{
            style: { fontFamily: fontFamilies.medium, letterSpacing: 1 },
          }}
        />
      ) : (
        <Select fullWidth size={tabViewMax ? "large" : "small"} />
      )}
    </Grid>
  );
};

//  styles for submitted Popup
export const submittedButton = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: 300, xs: 150 },
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 10,
  borderRadius: 2,
  p: { sm: 3, xs: 2 },
};
