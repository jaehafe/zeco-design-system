import styled from "@emotion/styled";

export const Container = styled.div`
  & .checkbox-input {
    visibility: hidden;
    position: absolute;
  }

  & label {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
