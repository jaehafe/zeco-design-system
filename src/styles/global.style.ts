import { css } from "@emotion/react";
import reset from "./reset.style";

export const globalStyles = css`
  ${reset}

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: inherit;
    color: #0a0b0b; // gray11
  }

  button,
  input {
    font-family: inherit;
    user-select: none;
  }

  // 'edge 비밀번호 보기' 없애기
  input[type="password"]::-ms-reveal,
  input[type="password"]::-ms-clear {
    display: none;
  }

  @font-face {
    font-family: "SpoqaHanSansNeoBold";
    font-weight: 700;
    src: url("../../../public/static/fonts/SpoqaHanSansNeo-Bold.woff") format("truetype");
  }
  @font-face {
    font-family: "SpoqaHanSansNeoMedium";
    font-weight: 500;
    src: url("../../../public/static/fonts/SpoqaHanSansNeo-Medium.woff") format("truetype");
  }
  @font-face {
    font-family: "SpoqaHanSansNeoRegular";
    font-weight: 400;
    src: url("../../../public/static/fonts/SpoqaHanSansNeo-Regular.woff") format("truetype");
  }
  @font-face {
    font-family: "SpoqaHanSansNeoLight";
    font-weight: 300;
    src: url("../../../public/static/fonts/SpoqaHanSansNeo-Light.woff") format("truetype");
  }
`;
