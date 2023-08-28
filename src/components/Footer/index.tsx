import React from 'react';
import { Layout } from '@simao234430/yoo-components';
import { FooterProps } from '@simao234430/yoo-components/es/Layout/interface';
import cs from 'classnames';
import styles from './style/index.module.less';

function Footer(props: FooterProps = {}) {
  const { className, ...restProps } = props;
  return (
    <Layout.Footer className={cs(styles.footer, className)} {...restProps}>
      Arco Design Pro
    </Layout.Footer>
  );
}

export default Footer;
