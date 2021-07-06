export default (posts = [], action) => {  // state = posts = []
    
    switch(action.type) {   // for mulitple action calls 
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}