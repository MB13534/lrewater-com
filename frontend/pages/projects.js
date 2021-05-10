import Projects from 'views/Projects';
import Main from 'layouts/Main';
import React from 'react';

const ProjectsPage = ({ data }) => {
  return (
    <div className="container">
      <Main siteSettings={data.siteSettings}>
        <Projects data={data} />
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

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/page_projects?fields=*.*.*&single=1`);
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
        services,
        serviceGroups,
        projects,
        expertises,
        pageData,
        siteSettings,
      },
    },
  };
}

export default ProjectsPage;
