import React, { createContext, useContext, useState } from 'react';

const ProjectFilterContext = createContext();

export const useProjectFilter = () => useContext(ProjectFilterContext);

export const ProjectFilterProvider = ({ children }) => {
  const [filter, setFilter] = useState('all projects');
  return (
    <ProjectFilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </ProjectFilterContext.Provider>
  );
}; 