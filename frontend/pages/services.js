import Services from 'views/Services';
import Main from 'layouts/Main';

const ServicesPage = ({ data }) => {
  return (
    <div className="container">
      <Main>
        <Services data={data} />
      </Main>
    </div>
  );
};

export async function getStaticProps() {
  let res, json = null;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/service_groups?fields=*.*`);
  json = await res.json();
  let serviceGroups = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/page_services?fields=*.*.*&single=1`);
  json = await res.json();
  let pageData = json.data;

  return {
    props: {
      data: {
        serviceGroups,
        pageData,
      },
    },
  };
}

export default ServicesPage;
