declare module '*.mdx';
declare module '*.woff';

declare module '*.png';
declare module '*.otf';
declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}
