import styled from 'styled-components';
import Page from 'components/Page';
import FormSection from 'views/SignInPage/FormSection';

export default function SignInPage() {
  return (
    <Page
      title="Sign In"
      description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
    >
      <SignInContainer>
        <FormSection />
      </SignInContainer>
    </Page>
  );
}

const SignInContainer = styled.div`
  display: flex;
`;
