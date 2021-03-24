import { makeStyles } from '@material-ui/styles';

const centeredStyleObj = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export default makeStyles({
  container: {
    height: '100vh',
    flexDirection: 'column',
    ...centeredStyleObj
  },
  cardContainer: {
    flexDirection: 'column',
    height: '200',
    width: 400,
    padding: '2rem',
    ...centeredStyleObj
  },
  title: {
    fontSize: '3rem',
  },
  subtitle: {
    fontSize: '2rem',
  },
  titleGridContainer: {
    ...centeredStyleObj
  },
  textFieldSearch: {
    marginTop: '2em',
    width: '90%'
  },
  searchButton: {
    marginLeft: '.5rem'
  },
  buttonsContainer: {
    marginTop: '.5rem'
  }, 
  iconRest: {
    marginLeft: '.5rem',
    fontSize: '3rem'
  }
});