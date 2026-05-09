import { useState, useEffect } from 'react';
import FilterButton from '../../molecules/FilterButton';
import SearchInput from '../../molecules/SearchInput';
import ProjectCard from '../../molecules/ProjectCard';
import useFilter from '../../../hooks/useFilter';
import projects from '../../../constants/projects';
import styles from './index.module.css';

const PAGE_SIZE = 2;

const ProjectsSection = () => {
  const { filteredProjects, activeFilter, filters, handleFilterChange, search, handleSearchChange } =
    useFilter(projects);

  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [activeFilter, search]);

  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);
  const visibleProjects = filteredProjects.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Projetos</h2>
        <SearchInput value={search} onChange={handleSearchChange} />
        <div className={styles.filters}>
          {filters.map((f) => (
            <FilterButton
              key={f}
              label={f}
              isActive={activeFilter === f}
              onClick={() => handleFilterChange(f)}
            />
          ))}
        </div>
        <div className={styles.grid}>
          {visibleProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={page * PAGE_SIZE + i + 1} />
          ))}
        </div>
        {totalPages > 1 && (
          <div className={styles.nav}>
            <button
              className={styles.navBtn}
              onClick={handlePrev}
              disabled={page === 0}
              aria-label="Projetos anteriores"
            >
              ←
            </button>
            <span className={styles.navIndicator}>
              {page * PAGE_SIZE + 1}–{Math.min((page + 1) * PAGE_SIZE, filteredProjects.length)} de {filteredProjects.length}
            </span>
            <button
              className={styles.navBtn}
              onClick={handleNext}
              disabled={page === totalPages - 1}
              aria-label="Próximos projetos"
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
