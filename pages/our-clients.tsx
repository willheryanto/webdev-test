import type { NextPage } from 'next';
import styled from 'styled-components';
import Container from 'components/Container';
import Page from 'components/Page';
import Clients from 'views/HomePage/Clients';

const OurClients: NextPage = () => {
  return (
    <Page
      title="Our Clients"
      description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
    >
      <OurClientsPage>
        <Clients />
      </OurClientsPage>
    </Page>
  );
};

const OurClientsPage = styled(Container)`
  display: flex;
`;

export default OurClients;
