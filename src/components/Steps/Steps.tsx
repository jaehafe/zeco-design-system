import React from 'react';
import * as S from './style';

import { getClassName } from '../../utils/getClassNames';

export interface StepsProps {
  widthSize?: string | number;

  currentStep?: number;
  stepDataList?: { description: string }[];
}
export default function Steps({ widthSize = '426', currentStep = 1, stepDataList = [] }: StepsProps) {
  if (currentStep < 0) {
    currentStep = 1;
  }

  return (
    <S.StepContainer widthSize={widthSize}>
      {stepDataList?.length &&
        stepDataList.map((stepData, idx) => (
          <S.StepItem
            key={idx + stepData?.description}
            className={getClassName(['step-item', { active: idx + 1 <= currentStep }])}
          >
            <S.StepCounter className="step-counter">{idx + 1}</S.StepCounter>
            <S.StepDescription className="step-description">{stepData.description}</S.StepDescription>
          </S.StepItem>
        ))}
    </S.StepContainer>
  );
}
