import Resources from 'views/Resources';
import Main from 'layouts/Main';

const ResourcesPage = ({ data }) => {
  return (
    <div className="container">
      <Main>
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

  let pageData = {};

  return {
    props: {
      data: {
        resources,
        resourceTypes,
        pageData,
      },
    },
  };
}

export default ResourcesPage;
