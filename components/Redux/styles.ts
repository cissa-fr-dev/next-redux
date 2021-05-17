import styled from 'styled-components';

export const Content = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentButton = styled.div`
  height: 70%;
  width: 18rem;
  display: flex;
  align-items: flex-end;
`;

export const H1 = styled.h1`
  height: 5rem;
  padding: 1%;
`;

export const H4 = styled.h4`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1%;
  align-items: flex-start;
`;

export const ContentForm = styled.div`
  width: 100%;
  height: calc(100% - 5rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  height: 25rem;
  width: 22rem;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #cbdee0;
  border: 1px solid #608e8e;
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px;
`;
