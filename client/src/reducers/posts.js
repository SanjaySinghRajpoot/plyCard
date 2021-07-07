export default (posts = [], action) => {  // state = posts = []
    
    switch(action.type) {   // for mulitple action calls 
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}