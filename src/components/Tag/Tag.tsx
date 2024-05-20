import React from "react";
import * as S from "./style";
import { SerializedStyles } from "@emotion/react";

export type Variants = "rectangle" | "circle";
export type TagColor = "red" | "blue" | "green";
export interface TagProps {
  children: React.ReactNode;
  customStyles?: SerializedStyles;
  variants?: Variants;
  tagColor?: TagColor;
}

export default function Tag({
  children,
  customStyles,
  variants = "rectangle",
  tagColor = "red",
}: TagProps) {
  return (
    <S.Container customStyles={customStyles} variants={variants} tagColor={tagColor}>
      {children}
    </S.Container>
  );
}
