import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Landing Page/Home'
import "./index.css"
// import { CopilotKit } from "@copilotkit/react-core"
// import { CopilotSidebar } from "@copilotkit/react-ui";
// import "@copilotkit/react-ui/styles.css";
const ApiKey = import.meta.env.VITE_COPILOT_API_KEY;

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      {/* <CopilotKit publicApiKey={ApiKey}>
        <CopilotSidebar
          defaultOpen={true}
          instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have and give a detail analysis of the stocks."}
          labels={{
            title: "Sidebar Assistant",
            initial: "How can I help you today?",
          }}
        > */}
          <Routes>
            <Route path='/home/*' element={<Home />} />
          </Routes>
        {/* </CopilotSidebar>

      </CopilotKit> */}
    </BrowserRouter>
)
