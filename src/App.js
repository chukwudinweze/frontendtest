import DataHighlight from "./components/DataHighlight";
import FilmsTable from "./components/FilmsTable";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle";

function App() {
  return (
    <section>
      <Header />
      <DataHighlight />
      <PageTitle title="films" />
      <FilmsTable />
    </section>
  );
}

export default App;
