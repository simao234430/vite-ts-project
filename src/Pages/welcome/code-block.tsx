import React from 'react';
import { Button, Tooltip, Message } from '@simao234430/yoo-components';
import { IconCopy } from '@simao234430/yoo-components/icon/index.es';
import clipboard from '@/utils/clipboard';
import styles from './style/code-block.module.less';

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock(props: CodeBlockProps) {
  const { code } = props;
  return (
    <pre className={styles['code-block']}>
      <code className={styles['code-block-content']}>{code}</code>
      <Tooltip content="点击复制命令">
        <Button
          type="text"
          className={styles['code-block-copy-btn']}
          icon={<IconCopy />}
          onClick={() => {
            clipboard(code);
            Message.success('复制成功');
          }}
        />
      </Tooltip>
    </pre>
  );
}
