import React from "react";
import MyComponent from "./component/MyComponent";
import App from "./component/MyComponent";
import MultiSelect from "./component/MultiSelect";
import Tags from "./component/AutoComplete";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import HomePageExampleContext from "./Home/HomePageExampleContext";
// import HomePageExampleContext from "./Home/HomePage";

export default function HomePage() {
  return (
    <>
      <AuthProvider>
        <HomePageExampleContext />
        <LoginPage />
        {/* <Tags /> */}
        {/* <App /> */}
        {/* <MultiSelect /> */}
      </AuthProvider>
    </>
  );
}
