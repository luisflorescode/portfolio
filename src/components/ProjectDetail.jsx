import { useContext } from 'react';
import ModalContext from '../context/ModalContext';
import useFetch from '../hooks/useFetch';
import '../assets/styles/components/ProjectDetail.scss';
import Loader from './Loader';
import Carousel from './Carousel';

const ProjectDetail = () => {
  const { projectId } = useContext(ModalContext);
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/${projectId}`,
  );

  const Detail = () => {
    const {
      project: { screenshots, name, description, url, repository },
    } = data;

    return (
      <div className="detail">
        <div className="detail__carousel">
          <Carousel images={screenshots} />
        </div>
        <div className="detail__content">
          <article>
            <h2>{name}</h2>
            <p>{description}</p>
          </article>
          <div className="detail__content__links">
            <a href={url} target="_blank" rel="noreferrer">
              <div className="contact__email__link">Visitar sitio</div>
            </a>
            <a href={repository} target="_blank" rel="noreferrer">
              <div className="contact__email__link">Ver Repositorio</div>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="project-detail">
      {loading && <Loader />}
      {error && <h1>Error</h1>}
      {data && <Detail />}
    </div>
  );
};

export default ProjectDetail;
