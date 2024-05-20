import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
`;

export const OptionWrapper = styled.div`
  position: absolute;
  right: 4%;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  width: 106px;
  height: 76px;
  background-color: #fff;
  z-index: 1;
`;

export const EditWrapper = styled.div`
  width: 106px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid #cacaca;
  cursor: pointer;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 12px 16px 12px 12px;
  :hover {
    background-color: #eff3fc;
  }
`;

export const Edit = styled.div`
  width: 56px;
  height: 14px;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.42px;
  color: #0a0b0b;
`;

export const DeleteWrapper = styled.div`
  width: 106px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-right: 1px solid #cacaca;
  border-bottom: 1px solid #cacaca;
  border-left: 1px solid #cacaca;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: #eff3fc;
  }
`;

export const Delete = styled.div`
  width: 56px;
  height: 14px;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.42px;
`;
