declare module 'redux-persist/integration/react' {
  import { ReactNode } from 'react';
  
  export interface PersistGateProps {
    loading?: ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    persistor: any;
    onBeforeLift?: () => void;
    children?: ReactNode;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export class PersistGate extends React.Component<PersistGateProps, any> {}
}