import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from 'components/Button';
import Input from 'components/Input';

export default function FormSection() {
  const { register, formState } = useForm();
  const { isSubmitSuccessful, isSubmitting, isSubmitted, errors } = formState;

  const isSent = isSubmitSuccessful && isSubmitted;
  const isDisabled = isSubmitting || isSent;
  const isSubmitDisabled = Object.keys(errors).length > 0 || isDisabled;

  return (
    <Wrapper>
      <Form>
        <InputGroup>
          <InputStack>
            {errors.name && <ErrorMessage>Email is required</ErrorMessage>}
            <Input placeholder="Email" id="email" disabled={isDisabled} {...register('email', { required: true })} />
          </InputStack>
          <InputStack>
            {errors.email && <ErrorMessage>Password is required</ErrorMessage>}
            <Input
              type="password"
              placeholder="Password"
              id="password"
              disabled={isDisabled}
              {...register('password', { required: true })}
            />
          </InputStack>
        </InputGroup>
        <Button as="button" type="submit" disabled={isSubmitDisabled}>
          Sign Up
        </Button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 2;
`;

const Form = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 2rem;
  }

  & > * {
    flex: 1;
  }
`;

const InputStack = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
`;

const Textarea = styled(Input)`
  width: 100%;
  min-height: 20rem;
`;
