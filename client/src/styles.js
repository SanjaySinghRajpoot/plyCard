import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 10,
    margin: '0 0 30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif'
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    fontWeight: 'bold'
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]:{
    mainContainer: {
      flexDirection: "column-reverse",
    },
  }
}));
