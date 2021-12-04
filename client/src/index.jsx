import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache({}),
    uri: "http://localhost:4000/graphql"
});

client
    .query({
        query: gql`
            query TestQuery {
                launch(id: 104) {
                id
                mission {
                    name
                }
            }
        }
    `
    })
    .then(result => console.log(result));