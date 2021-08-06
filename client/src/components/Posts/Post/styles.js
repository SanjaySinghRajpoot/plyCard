import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '11%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  fullHeightCard: {
    height: '100%',
    width: '100%',
  },
  border: {
    border: 'solid',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'coloumn',
    borderRadius: '7px',
    height: '100%',
    position: 'relative',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: '10px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  overlay3: {
    position: 'absolute',
    top: '110px',
    left: '10px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'relative',
    padding: '25px 13px 0px 28px',
  },
  title: {
    margin: '10px 16px',
  },
  cardActions: {
    padding: '6px 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
