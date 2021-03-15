import React from 'react';
import Services from 'views/Services';
import Main from 'layouts/Main';

const IndexPage = ({ data }) => {
  return (
    <div className="container">
      <Main>
        Service group {data.serviceGroup.name}
      </Main>
    </div>
  );
};

export async function getStaticPaths() {
  let res, json = null;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/service_groups?fields=id`);
  json = await res.json();
  let serviceGroups = json.data;

  return {
    paths: serviceGroups.map(serviceGroup => (
      { params: { id: serviceGroup.id.toString() } }
    )),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let res, json = null;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/service_groups/${params.id}?fields=*.*`);
  json = await res.json();
  let serviceGroup = json.data;

  return {
    props: {
      data: {
        serviceGroup,
      },
    },
  };
}

export default IndexPage;
