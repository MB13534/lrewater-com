import Home from 'views/Home';
import Main from 'layouts/Main';

const IndexPage = ({ data }) => {
  return (
    <div className="container">
      <Main siteSettings={data.siteSettings}>
        <Home data={data} />
      </Main>
    </div>
  );
};

export async function getStaticProps() {
  let res, json = null;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/service_groups?fields=*.*`);
  json = await res.json();
  let serviceGroups = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/page_home?fields=*.*.*&single=1`);
  json = await res.json();
  let pageData = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/site_settings?fields=*.*.*&single=1`);
  json = await res.json();
  let siteSettings = json.data;

  return {
    props: {
      data: {
        serviceGroups,
        pageData,
        siteSettings
      },
    },
  };
}

export default IndexPage;
