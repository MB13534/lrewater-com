import React from 'react';
import Main from 'layouts/Main';
import CareerDetail from '../../src/views/CareerDetail';

const IndexPage = ({ data }) => {
  return (
    <div className="container">
      <Main siteSettings={data.siteSettings}>
        <CareerDetail data={data} />
      </Main>
    </div>
  );
};

export async function getStaticPaths() {
  let res, json = null;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/locations?fields=id`);
  json = await res.json();
  let locations = json.data;

  return {
    paths: locations.map(location => (
      { params: { id: location.id.toString() } }
    )),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let res, json = null;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/locations/${params.id}?fields=*.*`);
  json = await res.json();
  let location = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/positions?filter[locations.locations_id.id][eq]=${params.id}&fields=*.*.*`);
  json = await res.json();
  let positions = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/page_careers?fields=*.*.*&single=1`);
  json = await res.json();
  let pageData = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/site_settings?fields=*.*.*&single=1`);
  json = await res.json();
  let siteSettings = json.data;

  return {
    props: {
      data: {
        location,
        positions,
        pageData,
        siteSettings,
      },
    },
  };
}

export default IndexPage;
