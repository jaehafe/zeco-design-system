# ZECO Design System

### Installation

```shell
$ npm install zeco-design-system
# or
$ yarn add zeco-design-system
```

### **Getting started**

To start using the components, first wrap your application in a provider provided by **zeco-design-system**

```tsx
import { Provider as ZecoProvider } from 'zeco-design-system';

const App = ({ children }) => {
  return <ZecoProvider>{children}</ZecoProvider>;
};
```

After adding the provider, now you can start using components like this.

```tsx
import { Button } from 'zeco-design-system';

function App() {
  return (
    <Button variant="primary" size="lg">
      Hello World
    </Button>
  );
}
```

### Storybook

https://66265c5672586368fbf26de8-wzlmdvlgcj.chromatic.com/
