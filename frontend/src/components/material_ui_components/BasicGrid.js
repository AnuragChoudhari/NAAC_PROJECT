import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ReportsAnalytics from "./ReportsAnalytics";
import Stack from "@mui/material/Stack";

import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    const [maxVal, setMaxVal] = useState(0);
    const [value, setValue] = useState(0);

    useEffect(()=>{
        setMaxVal(100);
        setValue(50);
    },[])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Item>
            <ReportsAnalytics></ReportsAnalytics>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <ReportsAnalytics></ReportsAnalytics>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 10, md: 0 }}
            >
              <Gauge
                width={100}
                height={100}
                value={value}
                startAngle={-90}
                endAngle={90}
                valueMax={maxVal}
                text={`${value} / ${maxVal}`}
              />
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <ReportsAnalytics></ReportsAnalytics>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <ReportsAnalytics></ReportsAnalytics>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
