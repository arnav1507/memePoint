import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React from "react";
import faceMemeIcon from "../assets/memepoint.png";
import faceMemeIconRev from "../assets/memepointRev.png";

function LandingPage() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Button
        LinkComponent={Link}
        to="/auth"
        color="warning"
        variant="contained"
        sx={{ fontSize: 30 }}
      >
        <img src={faceMemeIconRev} style={{ height: 70, width: 70 }} />
        Welcome to MemePoint{" "}
        <img src={faceMemeIcon} style={{ height: 70, width: 70 }} />
      </Button>
    </Grid>
  );
}

export default LandingPage;
