import React from 'react';
import { Pagination, PaginationItem} from '@material-ui/lab';

import useStyles from './styles';
import { Link } from 'react-router-dom';

const Paginatate = () => {
    const classes = useStyles();

    return(
        <Pagination 
         classes={{ul: classes.ul}}
         count={5}
         page={1}
         varient="outlined"
         color="primary"
         renderItem={(item) => (
             <PaginationItem {...item} component={Link} to={`/posts?page=${1}`}/> 
         )}
        />
    )
}

export default Paginatate;