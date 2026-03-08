import { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from './lib/supabase';
import { isDemoMode, demoUser } from './lib/demo';
import Auth        from './components/Auth';
import Dashboard   from './components/Dashboard';
import Calculator  from './components/Calculator';
import Header      from './components/Header';
import SuccessPage from './components/SuccessPage';

// Contexts
export const ThemeContext = createContext(null);
export const useTheme    = () => useContext(ThemeContext);
export const AuthContext  = createContext(null);
export const useAuth     = () => useContext(AuthContext);
export const UsageContext = createContext(null);
export const useUsage    = () => useContext(UsageContext);

function App() {
  const [session, setSession] = useState(undefined);
  const [usage,   setUsage]   = useState({ isPremium: false, queriesUsed: 0, queriesLimit: 5 });
  const [dark,    setDark]    = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const demoActive = isDemoMode();
  useEffect(() => {
    if (demoActive) { setSession({ user: demoUser }); return; }
    supabase.auth.getSession()
      .then(({ data: { session } }) => setSession(session))
      .catch(() => setSession(null));
    let sub = null;
    try {
      const { data } = supabase.auth.onAuthStateChange((_e, s) => {
        if (!isDemoMode()) setSession(s);
      });
      sub = data.subscription;
    } catch (_) { setSession(null); }
    return () => sub?.unsubscribe();
  }, [demoActive]);

  if (session === undefined) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-brand-600" />
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <AuthContext.Provider value={{ session, user: session?.user }}>
        <UsageContext.Provider value={{ usage, setUsage }}>
          <BrowserRouter>
            {session && <Header />}
            <main className={session ? 'pt-16 min-h-screen bg-slate-50 dark:bg-slate-950' : ''}>
              <Routes>
                <Route path="/login"            element={!session ? <Auth />       : <Navigate to="/" />} />
                <Route path="/"                 element={ session ? <Dashboard />  : <Navigate to="/login" />} />
                <Route path="/calc/:categoryId" element={ session ? <Calculator /> : <Navigate to="/login" />} />
                <Route path="/success"          element={ session ? <SuccessPage />: <Navigate to="/login" />} />
                <Route path="*"                 element={<Navigate to={session ? '/' : '/login'} />} />
              </Routes>
            </main>
          </BrowserRouter>
        </UsageContext.Provider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
