import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <>
      <div className=" overflow-hidden">
        <Layout>
          <Dashboard />
        </Layout>
      </div>
    </>
  );
}

export default App;
