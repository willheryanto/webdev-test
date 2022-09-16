import styled from 'styled-components';
import Page from 'components/Page';

export default function AboutUsPage() {
  return (
    <Page
      title="About Us"
      description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
    >
      <AboutUsContainer>
      </AboutUsContainer>
    </Page>
  );
}

const AboutUsContainer = styled.div`
  display: flex;
`;
