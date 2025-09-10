import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user]);

  const login = async (email, password) => {
    // const res = await api.post('/auth/login', { email, password });
    // localStorage.setItem('token', res.data.token);
    // setUser(res.data.user);
    // return res;

    // i want to make a fake login
    if (email === 'admin@lms.com' && password === 'password') {
      localStorage.setItem('token', 'fake-token');
      // set user in local storage fakely
      localStorage.setItem('user', JSON.stringify({ email }));
      setUser({ email });
      return { data: { user: { email } } };
    }

    throw new Error('Invalid credentials');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
