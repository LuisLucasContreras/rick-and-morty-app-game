import axios from "axios";

const graphqlBase  = axios.create({
    baseURL :'https://rickandmortyapi.com/graphql'
})

export default graphqlBase