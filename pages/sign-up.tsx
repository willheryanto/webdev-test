import styled from 'styled-components';
import Page from 'components/Page';
import FormSection from 'views/SignUpPage/FormSection';

export default function SignUpPage() {
  return (
    <Page
      title="Sign Up"
      description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
    >
      <SignUpContainer>
        <FormSection />
      </SignUpContainer>
    </Page>
  );
}

const SignUpContainer = styled.div`
  display: flex;
`;
