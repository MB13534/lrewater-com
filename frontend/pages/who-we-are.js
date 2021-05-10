import WhoWeAre from 'views/WhoWeAre';
import Main from 'layouts/Main';
import React from 'react';

const WhoWeArePage = ({ data }) => {
  return (
    <div className="container">
      <Main siteSettings={data.siteSettings}>
        <WhoWeAre data={data} />
      </Main>
    </div>
  );
};

export async function getStaticProps() {
  let res, json = null;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/people?fields=*.*`);
  json = await res.json();
  let people = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/locations?fields=*.*`);
  json = await res.json();
  let locations = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/page_who_we_are?fields=*.*.*&single=1`);
  json = await res.json();
  let pageData = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/site_settings?fields=*.*.*&single=1`);
  json = await res.json();
  let siteSettings = json.data;

  return {
    props: {
      data: {
        people,
        locations,
        pageData,
        siteSettings,
      },
    },
  };
}

export default WhoWeArePage;
