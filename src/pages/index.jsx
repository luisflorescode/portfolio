import Head from 'next/head';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ModalContext from '../context/ModalContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Communities from '../components/Communities';
import Contact from '../components/Contact';
import Modal from '../components/Modal';
import ProjectDetail from '../components/ProjectDetail';

function Home({ hero, about, skills, projects, communities }) {
  const [modal, setModal] = useState({ isOpen: false, projectId: '' });
  const { isOpen, projectId } = modal;

  return (
    <ModalContext.Provider value={{ projectId, setModal }}>
      <Head>
        <title>Luis Flores | Frontend Developer</title>
      </Head>
      <Header />
      <Hero {...hero} />
      <About {...about} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Communities communities={communities} />
      <Contact />
      {isOpen && (
        <Modal>
          <ProjectDetail />
        </Modal>
      )}
    </ModalContext.Provider>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/data`);
  const { hero, about, skills, projects, communities } = await res.json();

  return { props: { hero, about, skills, projects, communities } };
}

Home.propTypes = {
  hero: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
  communities: PropTypes.array.isRequired,
};

export default Home;
