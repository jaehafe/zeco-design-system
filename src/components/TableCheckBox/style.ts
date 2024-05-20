import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";

export const Container = styled.div<{ customStyles?: SerializedStyles }>`
  ${({ customStyles }) => customStyles}

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
