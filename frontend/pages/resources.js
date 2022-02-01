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
  let res,
    json = null;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/resources?fields=*.*.*`);
  json = await res.json();
  let resources = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/resource_types?fields=*.*.*`);
  json = await res.json();
  let resourceTypes = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/site_settings?fields=*.*.*&single=1`);
  json = await res.json();
  let siteSettings = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/people?fields=*.*`);
  json = await res.json();
  let people = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/services?fields=*.*`);
  json = await res.json();
  let services = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/service_groups?fields=*.*`);
  json = await res.json();
  let serviceGroups = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/expertises?fields=*.*`);
  json = await res.json();
  let expertises = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/projects?fields=*.*`);
  json = await res.json();
  let projects = json.data;

  let pageData = {};

  return {
    props: {
      data: {
        people,
        services,
        serviceGroups,
        resources,
        projects,
        expertises,
        resourceTypes,
        pageData,
        siteSettings,
      },
    },
  };
}

export default ResourcesPage;
