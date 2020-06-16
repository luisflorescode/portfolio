import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';

function Home({ data }) {
  return (
    <>
      <Head>
        <title>Luis Flores | Frontend Developer</title>
      </Head>
      <Header />
      <Hero {...data.hero} />
      <About {...data.about} />
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
