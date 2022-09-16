import styled from 'styled-components';
import Page from 'components/Page';

export default function FeaturesPage() {
  return (
    <Page
      title="About Us"
      description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
    >
      <FeaturesContainer></FeaturesContainer>
    </Page>
  );
}

const FeaturesContainer = styled.div`
  display: flex;
`;
