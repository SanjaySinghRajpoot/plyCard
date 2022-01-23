import { React, useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Paper,
  TextField,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts, getPostsBySearch } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Pagination from "../pagination";
import { mergeClasses } from "@material-ui/styles";
import { useHistory, useLocation } from "react-router-dom";
import useStyles from "./styles";
import Chip from '@material-ui/core/Chip';
import ChipInput from 'material-ui-chip-input';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);


  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const searchPost = () => {
    if(search.trim() || tags){
       dispatch(getPostsBySearch({ search, tags: tags.join(',')}));
       history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    }else {
      history.push('/');
    }
  }

  const handlekeyPress = (e) => {
    if(e.keyCode === 13){   // 13 = enter key
        searchPost();
    }
  };


  const handleAdd = (tag) => {
    setTags([...tags, tag]);
  }

  const handleDelete = (tagToDelete) => {
       setTags(tags.filter((tag) => tag !== tagToDelete));  
  }

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={0}
        >
          <Grid item xs={12} sm={6} md={3}>
            
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search"
                onKeyPress={handlekeyPress}
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ChipInput
               style={{ margin: '10px 0px 0px 0px'}}
               variant="outlined"
               color="primary"
               value={tags}
               onAdd={handleAdd}
               onDelete={handleDelete}
               label="Search Tags"
              />
              <br></br>
              <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            <Posts setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Pagination />
            </Paper>
          </Grid>

          <Grid>
            
          </Grid>

        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
