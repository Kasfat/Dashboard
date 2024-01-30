import Layout from "./components/layout/Layout"
import Dashboard from "./pages/dashboard"


function App() {
  
  return (
    <>
      <div className="h-full ">
         <Layout>
            <Dashboard/>
         </Layout>
      </div>
    </>
  )
}

export default App
