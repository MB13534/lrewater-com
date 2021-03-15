import NotFound from 'views/NotFound';
import Main from 'layouts/Main';

const Custom404 = () => {
  return (
    <div className="container">
      <Main>
        <NotFound />
      </Main>
    </div>
  );
}

export default Custom404;
