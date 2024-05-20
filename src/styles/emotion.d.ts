import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      [key: string]: string;
    };
    zIndex: {
      [key: string]: number;
    };
  }
}
