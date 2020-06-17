import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Communities from '../components/Communities';

function Home({ data }) {
  return (
    <>
      <Head>
        <title>Luis Flores | Frontend Developer</title>
      </Head>
      <Header />
      <Hero {...data.hero} />
      <About {...data.about} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Communities communities={data.communities} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/data`);
  const data = await res.json();

  return { props: { data } };
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
