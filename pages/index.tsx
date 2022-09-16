import type { NextPage } from 'next';
import styled from 'styled-components';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustration';

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Contents>
        <Heading>We help you sell your motorbike</Heading>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tempora qui. Explicabo voluptate iure ipsum molestias
          repudiandae perspiciatis nostrum praesentium, unde pariatur tempora magni rem. Necessitatibus facilis obcaecati ratione.
        </Description>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </PageContainer>
  );
};

const PageContainer = styled(Container)`
  top: var(--height-navbar);
  display: flex;
  padding: 2px;
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }
`;

export default Home;
