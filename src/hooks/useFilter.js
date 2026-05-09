import { useState } from 'react';

const useFilter = (projects) => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [search, setSearch] = useState('');

  const filters = ['Todos', ...new Set(projects.flatMap((p) => p.tags))];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      activeFilter === 'Todos' || project.tags.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  const handleFilterChange = (filter) => setActiveFilter(filter);
  const handleSearchChange = (value) => setSearch(value);

  return {
    filteredProjects,
    activeFilter,
    filters,
    handleFilterChange,
    search,
    handleSearchChange,
  };
};

export default useFilter;
