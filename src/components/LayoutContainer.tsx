import { ReactNode } from 'react';

import styles from './styles/LayoutContainer.module.css';

type ILayout = {
  children: ReactNode;
};

const LayoutContainer = ({ children }: ILayout) => {
  return <main className={styles.mainContainer}>{children}</main>;
};

export default LayoutContainer;
