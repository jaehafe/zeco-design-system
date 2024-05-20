import {
  DropdownHeightVariants,
  DropdownOptionType,
  DropdownWidthVariants,
  StrNumType,
} from "./RadixDropdown";

export const getListHeightSize = (options: DropdownOptionType[]) => {
  const length = options?.length;

  if (length === 1) {
    return 48;
  } else if (length === 2) {
    return 96;
  } else if (length === 3) {
    return 144;
  } else if (length === 4) {
    return 192;
  } else if (length === 5) {
    return 240;
  } else if (length === 6) {
    return 288;
  } else {
    return 289;
  }
};

export const getWidth = (widthSize: DropdownWidthVariants, width: StrNumType) => {
  // eslint-disable-next-line no-unused-vars
  const sizeWidthMap: { [key in DropdownWidthVariants]: string } = {
    auto: "auto",
    xl: "269px",
    lg: "240px",
    md: "166px",
    sm: "128px",
    xs: "95px",
  };

  if (width !== null && width !== undefined) {
    if (typeof width === "number") {
      return `${width}px`;
    }

    return `${width}`;
  }

  return sizeWidthMap[widthSize] || "auto";
};

export const getHeight = (
  heightSize: DropdownHeightVariants,
  height: StrNumType | undefined,
): string => {
  if (height !== null && height !== undefined) {
    // 숫자인 경우 px을 붙여 반환
    if (typeof height === "number") {
      return `${height}px`;
    }
    // 문자열인 경우 그대로 반환
    return height;
  }

  // heightSize에 따라 높이 설정
  if (heightSize === "slim") {
    return "32px";
  }
  return "40px";
};
