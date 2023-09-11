import AppContext from "./context/AppContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Home from "./routes/Home";
import GroupSpace from "./routes/GroupSpace";
import Login from "./components/pages/login/Login";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// import useAuthorization from "./customHooks/useAuthService";
import PageLayout from "./components/PageLayout";
// import ProtectedRoute from "./components/pages/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const queryClient = new QueryClient();

  // const { isAuthenticated } = useAuthorization(false);
  

  
  return (
    <>
      {/* any state that we want global access to, create it at the app level and stick it in the `value` object of the Provider */}
      <AppContext.Provider
        value={{ user, setUser, accessToken, setAccessToken }}
      >
        <Router>
          <Routes>
            {/* Home Route */}
            <Route
              name="home"
              path="/"
              element={
                <PageLayout userName={user?.username}>
                  <Home />
                </PageLayout>
              }
            />
            {/* Dashboard Route */}
            <Route name="login" path="/login" element={<Login />} />
            <Route
              // using path parameters here. for testing purposes, visit "/dashboard/0001"
              name="dashboard"
              path="/dashboard"
              x
              element={
                // TODO: need to implement protected route wrapper around this
                <PageLayout userName={user?.username}>
                  <Dashboard />
                </PageLayout>
              }
            />

            {/* GroupSpace Route */}
            <Route
              name="groupspace"
              path="/groupspace/:groupId"
              element={
                <PageLayout userName={user?.username}>
                  <QueryClientProvider client={queryClient}>
                    <GroupSpace />
                  </QueryClientProvider>
                </PageLayout>
              }
            />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
