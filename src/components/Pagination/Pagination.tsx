import * as React from 'react';
import * as S from './style';
import theme from '../../styles/theme.style';
import DoubleArrowIcon from '../icons/doubleArrow';
import SingleArrowIcon from '../icons/singleArrow';

export interface PaginationProps {
  total: number;
  countPerPage: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}

export default function Pagination({ total, countPerPage, currentPage, onChangePage }: PaginationProps) {
  const totalPages = Math.ceil(total / countPerPage);
  const maxButtonsToShow = 5;

  React.useEffect(() => {
    // 현재 페이지가 전체 페이지 수보다 클 때 조정
    if (currentPage > totalPages) {
      onChangePage(Math.max(totalPages, 1));
    }
  }, [total, currentPage, totalPages, onChangePage]);

  // 현재 페이지가 속한 5단위 그룹의 첫 번째 페이지를 계산
  const groupStartPage = Math.floor((currentPage - 1) / maxButtonsToShow) * maxButtonsToShow + 1;
  const groupEndPage = Math.min(groupStartPage + maxButtonsToShow - 1, totalPages);

  // 5단위 앞으로 가기
  const onPrevDoubleArrow = () => {
    onChangePage(Math.max(1, groupStartPage - maxButtonsToShow));
  };

  // 5단위 뒤로 가기
  const onNextDoubleArrow = () => {
    onChangePage(Math.min(totalPages, groupEndPage + 1));
  };

  // 1단위 앞으로 가기
  const onPrevPage = () => {
    onChangePage(Math.max(1, currentPage - 1));
  };

  // 1단위 뒤로 가기
  const onNextPage = () => {
    onChangePage(Math.min(totalPages, currentPage + 1));
  };

  return (
    <S.Container>
      <S.PaginationWrapper>
        <S.PaginationLeftArrowWrapper>
          <DoubleArrowIcon
            width={18}
            height={18}
            color={groupStartPage > 1 ? theme.colors.gray11 : theme.colors.gray7}
            onClick={groupStartPage > 1 ? onPrevDoubleArrow : undefined}
          />
          <SingleArrowIcon
            width={18}
            height={18}
            color={currentPage > 1 ? theme.colors.gray11 : theme.colors.gray7}
            onClick={currentPage > 1 ? onPrevPage : undefined}
          />
        </S.PaginationLeftArrowWrapper>
        {total && total > 0
          ? [...Array(groupEndPage - groupStartPage + 1)].map((_, index) => {
              const pageNumber = groupStartPage + index;
              return (
                <S.PageButton
                  key={pageNumber}
                  onClick={() => onChangePage(pageNumber)}
                  isCurrentPage={currentPage === pageNumber}
                >
                  {pageNumber}
                </S.PageButton>
              );
            })
          : // total이 0인 경우 빈 배열 반환
            []}
        <S.PaginationRightArrowWrapper>
          <SingleArrowIcon
            width={18}
            height={18}
            color={currentPage < totalPages ? theme.colors.gray11 : theme.colors.gray7}
            rotate={180}
            onClick={currentPage < totalPages ? onNextPage : undefined}
          />
          <DoubleArrowIcon
            width={18}
            height={18}
            color={groupEndPage < totalPages ? theme.colors.gray11 : theme.colors.gray7}
            rotate={180}
            onClick={groupEndPage < totalPages ? onNextDoubleArrow : undefined}
          />
        </S.PaginationRightArrowWrapper>
      </S.PaginationWrapper>
    </S.Container>
  );
}
