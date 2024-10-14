import { createContext, useContext, useState, useEffect } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [language, setLanguage] = useState("");
  const [response, setResponse] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(null);

  const setServerToken = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const isLoggedIn = !!token;

  const userAuthorization = async () => {
    if (!token) return; // Early return if no token

    const url = "http://localhost:3000/user";
    // const url = "https://form-4b0c.onrender.com/user";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response) {
      const userData = await response.json();
      setUser(userData.data);
      setLogin(true);
    } else {
      console.error("Failed to fetch user data:", response);
      setLogin(false);
    }
  };

  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    setLogin(false);
  };

  useEffect(() => {
    userAuthorization();
  }, [token]);

  return (
    <MyContext.Provider
      value={{
        login,
        setLogin,
        setServerToken,
        isLoggedIn,
        user,
        logoutUser,
        dark,
        setDark,
        language,
        setLanguage,
        response,
        setResponse,
        prompt,
        setPrompt,
        loading,
        setLoading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
