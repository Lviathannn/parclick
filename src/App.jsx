import FlowNav from "./components/FlowNav";
import FlowTable from "./components/FlowTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import History from "./components/History";
import Detail from "./components/Detail";

function App() {
   return (
      <>
         <div className="bg-slate-100 min-h-screen">
            <Router>
               <FlowNav />
               <Routes>
                  <Route path="/" Component={FlowTable} />
                  <Route path="/parking" Component={Form} />
                  <Route path="/history" Component={History} />
                  <Route path="/detail" Component={Detail} />
               </Routes>
            </Router>
         </div>
      </>
   );
}

export default App;
