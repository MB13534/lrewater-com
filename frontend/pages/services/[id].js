import React from 'react';
import Main from 'layouts/Main';
import ServiceDetail from '../../src/views/ServiceDetail';

const IndexPage = ({ data }) => {
  return (
    <div className="container">
      <Main siteSettings={data.siteSettings}>
        <ServiceDetail data={data} />
      </Main>
    </div>
  );
};

export async function getStaticPaths() {
  let res, json = null;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/services?fields=id`);
  json = await res.json();
  let services = json.data;

  return {
    paths: services.map(service => (
      { params: { id: service.id.toString() } }
    )),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let res, json = null;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/services/${params.id}?fields=*,service_group.*,service_group.image.*`);
  json = await res.json();
  let service = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/site_settings?fields=*.*.*&single=1`);
  json = await res.json();
  let siteSettings = json.data;

  return {
    props: {
      data: {
        service,
        siteSettings,
      },
    },
  };
}

export default IndexPage;
