import React from 'react';
import Main from 'layouts/Main';
import ResourceDetail from '../../src/views/ResourceDetail';

const IndexPage = ({ data }) => {
  return (
    <div className="container">
      <Main>
        <ResourceDetail data={data} />
      </Main>
    </div>
  );
};

export async function getStaticPaths() {
  let res, json = null;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/resources?fields=id`);
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

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/resources/${params.id}?fields=*.*`);
  json = await res.json();
  let resource = json.data;

  return {
    props: {
      data: {
        resource,
      },
    },
  };
}

export default IndexPage;
