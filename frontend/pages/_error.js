import ServerError from 'views/ServerError';
import Main from 'layouts/Main';

const ServerErrorPage = () => {
  return (
    <div className="container">
      <Main>
        <ServerError />
      </Main>
    </div>
  );
}

export default ServerErrorPage;