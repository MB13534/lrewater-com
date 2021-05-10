import React from 'react';
import Main from 'layouts/Main';
import ProjectDetail from '../../src/views/ProjectDetail';

const IndexPage = ({ data }) => {
  return (
    <div className="container">
      <Main siteSettings={data.siteSettings}>
        <ProjectDetail data={data} />
      </Main>
    </div>
  );
};

export async function getStaticPaths() {
  let res, json = null;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/projects?fields=id`);
  json = await res.json();
  let projects = json.data;

  return {
    paths: projects.map(project => (
      { params: { id: project.id.toString() } }
    )),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let res, json = null;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/projects/${params.id}?fields=*.*.*`);
  json = await res.json();
  let project = json.data;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/site_settings?fields=*.*.*&single=1`);
  json = await res.json();
  let siteSettings = json.data;

  return {
    props: {
      data: {
        project,
        siteSettings,
      },
    },
  };
}

export default IndexPage;
