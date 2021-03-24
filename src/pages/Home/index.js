import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';
import { LocalDining } from '@material-ui/icons';
import styles from './style';

// export default () => (<div>Home</div>)
export default ({ history }) => {
  const [serchText, setSearchText] = useState('');
  const classes = styles();
  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  const handleClean = event => {
    setSearchText('');
  };

  const handleSearch = event => {
    history.push(`/results?param=${serchText}`)
  }

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}> 
              UDG Restaurante!
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.subtitle}> 
            Busqueda platillos
            </Typography>
          </Grid>
          <Grid>
            <LocalDining className={classes.iconRest}/>
          </Grid>
        </Grid>
        <TextField
          className={classes.textFieldSearch}
          value={serchText}
          placeholder="Buscar..."
          onChange={handleSearchTextChange}       
        />
        <Grid className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handleClean}>Limpiar</Button>
          <Button variant="contained" className={classes.searchButton} color="primary" size="large" onClick={handleSearch}>Buscar</Button>
        </Grid>
      </Card>
    </Container>
  )
} 