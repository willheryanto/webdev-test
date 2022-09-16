import type { NextPage } from 'next';
import styled from 'styled-components';
import Container from 'components/Container';

const SignUp: NextPage = () => {
  return (
    <PageContainer>
      <p>SignUp</p>
    </PageContainer>
  );
};

const PageContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: flex;
  align-items: flex;
  height: 100%;
  width: 100%;
`;

export default SignUp;