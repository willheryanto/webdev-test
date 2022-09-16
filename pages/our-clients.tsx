import type { NextPage } from 'next';
import styled from 'styled-components';
import Container from 'components/Container';
import Clients from 'views/HomePage/Clients';

const OurClients: NextPage = () => {
  return (
    <PageContainer>
      <Title>Our Clients</Title>
      <Clients />
    </PageContainer>
  );
};

const Title = styled.h3`
  font-size: 4rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 10rem;
  text-align: center;
  opacity: 0.8;
`;

const PageContainer = styled(Container)`
  top: var(--height-navbar);
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;

export default OurClients;
