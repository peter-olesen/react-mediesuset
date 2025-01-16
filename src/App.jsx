import { UserContextProvider } from "./context/UserContext/UserContext";
import { Router } from "./router/Router";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <UserContextProvider>
      <ScrollToTop />
      <Router />;
    </UserContextProvider>
  );
}

export default App;
