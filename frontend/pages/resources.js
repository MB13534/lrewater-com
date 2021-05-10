import Resources from 'views/Resources';
import Main from 'layouts/Main';

const ResourcesPage = ({ data }) => {
  return (
    <div className="container">
      <Main siteSettings={data.siteSettings}>
        <Resources data={data} />
      </Main>
    </div>
  );
};

export async function getStaticProps() {
  let res, json = null;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/resources?fields=*.*.*`);
  json = await res.json();
  let resources = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/resource_types?fields=*.*.*`);
  json = await res.json();
  let resourceTypes = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/site_settings?fields=*.*.*&single=1`);
  json = await res.json();
  let siteSettings = json.data;

  let pageData = {};

  return {
    props: {
      data: {
        resources,
        resourceTypes,
        pageData,
        siteSettings,
      },
    },
  };
}

export default ResourcesPage;
