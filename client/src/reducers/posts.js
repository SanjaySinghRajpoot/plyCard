export default (posts = [], action) => {  // state = posts = []
    
    switch(action.type) {   // for mulitple action calls 
        case 'UPDATE':
                 return posts.map((post) => post._id === action.payload._id ? action.payload: post)
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}