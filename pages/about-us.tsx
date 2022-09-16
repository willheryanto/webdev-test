import styled from 'styled-components';
import Page from 'components/Page';

export default function AboutUsPage() {
  return (
    <Page
      title="About Us"
      description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
    >
      <AboutUsContainer>
        <Text>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat
          reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi
          laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate
          laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        </Text>
      </AboutUsContainer>
    </Page>
  );
}

const AboutUsContainer = styled.div`
  display: flex;
`;

const Text = styled.p`
  font-size: 2rem;
`;
