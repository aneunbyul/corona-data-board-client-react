import * as React from 'react';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const SignUp = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Button item variant="contained">돌아가기</Button>
        </Grid>
        <Grid item xs={4}>
          <Button item variant="contained">돌아가기</Button>
        </Grid>
        <Grid item xs={4}>
          <Button item variant="contained">돌아가기</Button>
        </Grid>
        <Grid item xs={8}>
          <Button item variant="contained">돌아가기</Button>
        </Grid>
        <Grid item xs={12}>
          <Button item variant="contained">돌아가기</Button>
        </Grid>
        <Grid item xs={8}>
          <Button item variant="contained">돌아가기</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default SignUp
