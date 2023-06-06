
"use client"

import { Grid } from "@nextui-org/react";
import { Card1 } from './Card1';
import { Card2 } from './Card2';
import { Card3 } from './Card3';
import { Card4 } from './Card4';
import { Card6 } from './Card6';
import { Card7 } from './Card7';
import { Card8 } from './Card8';
import { Card9 } from './Card9';
import { Card10 } from './Card10';
import { Card5 } from './Card5';

export default function MainCard() {
  return (
    <Grid.Container gap={4} justify="center">
      <Grid xs={12} sm={4}>
        <Card1 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card2 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card3 />
      </Grid>
      <Grid xs={12} sm={5}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={7}>
        <Card5 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card6 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card7 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card8 />
      </Grid>
      <Grid xs={12} sm={5}>
        <Card9 />
      </Grid>
      <Grid xs={12} sm={7}>
        <Card10 />
      </Grid>
     
    </Grid.Container>


  );
}
