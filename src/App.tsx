import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
/* Components */
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from "@mui/material";
import { Layout } from './components/Layout';
/* Context hooks */
import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./store/store"
/* Pages */
import HomePage from "./pages/HomePage";
/* Assets */
import { colors } from "./constants/Colors";
import './App.css'

const mainTheme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    }
  },
  palette:{
    background: {
      default: colors.primary,
    },
    primary:{
      main: colors.primary
    },
    secondary:{
      main: colors.tertiary
    }
  }
})

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <Router>
              <Layout>
                <CssBaseline/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="*" element={<Navigate to={"/"}/>}/>
                </Routes>
              </Layout>
          </Router>
        </ThemeProvider>
      </Provider>
    </AuthProvider>
  );
}

export default App
