import React from "react";
import Grid from "@mui/material/Grid2";
import { Skeleton, Stack } from "@mui/material";

export const LayoutLoader = () => {
  return (
    <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
      <Grid
        size={{ sm: 4, md: 3 }}
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        height={"100%"}
      >
        <Skeleton height={"100vh"} variant="rectangular" />
      </Grid>
      <Grid item size={{ xs: 12, sm: 8, md: 5, lg: 6 }} height={"100%"}>
        <Stack spacing={"1rem"}>
          {Array.from({ length: 10 }).map((_, index) => {
            return (
              <Skeleton key={index} height={"5rem"} variant="rectangular" />
            );
          })}
        </Stack>
      </Grid>
      <Grid
        item
        size={{ md: 4, lg: 3 }}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
        height={"100%"}
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>
    </Grid>
  );
};
