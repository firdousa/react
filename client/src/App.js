import Table from "./table";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
//1. create a client of GraphQL
let client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3444/graphql",
  }),
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <section className="class container-fluid">
          <section className="class row">
            <section className="col-8 m-auto">
              <Table />
            </section>
          </section>
        </section>
      </ApolloProvider>
    </>
  );
}

export default App;

//create a client of GraphQL
//set client to graphql provider
//set a query
//call a query
