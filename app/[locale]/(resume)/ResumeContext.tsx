import { createContext, useContext, useState, useMemo } from 'react';

interface ResumeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: ResumeContextType = {
  darkMode: true,
  toggleDarkMode: () => { return; },
  setDarkMode: () => { return; },
};

const ResumeContext = createContext(defaultValue);
export const useResumeContext = () => useContext(ResumeContext);

const ResumeProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const value = useMemo(() => ({ darkMode, toggleDarkMode, setDarkMode }), [
    darkMode,
    toggleDarkMode,
    setDarkMode,
  ]);

  return (
    <ResumeContext.Provider value={value} >
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;