import Culture from 'views/Culture';
import Main from 'layouts/Main';
import React from 'react';

const CulturePage = ({ data }) => {
  return (
    <div className="container">
      <Main>
        <Culture data={data} />
      </Main>
    </div>
  );
};

export async function getStaticProps() {
  let res, json = null;

  res = await fetch(`${process.env.DIRECTUS_ENDPOINT}/items/page_culture?fields=*.*.*&single=1`);
  json = await res.json();
  let pageData = json.data;

  return {
    props: {
      data: {
        pageData,
      },
    },
  };
}

export default CulturePage;
