import React, { useRef, useState } from 'react';
import * as S from './style';

import DotsIcon from '../icons/dots';
import EditIcon from '../icons/edit';
import DeleteIcon from '../icons/deleteIcon';

import useOnClickOutside from '../../hooks/useOnClickOutside';

export interface ThreeDotsProps {
  id: string;
  setEditId: React.Dispatch<React.SetStateAction<string>>;
  onClickDelete: () => void;
}

export default function ThreeDots({ setEditId, id, onClickDelete }: ThreeDotsProps) {
  const [isShow, setIsShow] = useState(false);

  const outsideRef = useRef<HTMLDivElement>(null);

  const onClickDots = () => {
    setIsShow((prev) => !prev);
  };

  useOnClickOutside(outsideRef, () => {
    setIsShow(false);
  });

  const onClickEdit = (id: string) => () => {
    setEditId(id);
  };

  return (
    <S.Wrapper onClick={onClickDots} ref={outsideRef}>
      <DotsIcon />
      {isShow && (
        <S.OptionWrapper>
          <S.EditWrapper onClick={onClickEdit(id!)}>
            <EditIcon width={14} height={14} />
            <S.Edit>이름 수정</S.Edit>
          </S.EditWrapper>
          <S.DeleteWrapper id={id} onClick={onClickDelete}>
            <DeleteIcon />
            <S.Delete>삭제</S.Delete>
          </S.DeleteWrapper>
        </S.OptionWrapper>
      )}
    </S.Wrapper>
  );
}
