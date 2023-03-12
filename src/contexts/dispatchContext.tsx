import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { DispatchAppProps, DispatchProvider } from '@usedispatch/forum';
import { ReactNode } from 'react';

interface Props {
  baseURL: string;
  forumURL: string;
  topicURL: string;
  children?: ReactNode | ReactNode[];
  cluster: string;
}

const DispatchApp = ({
  baseURL,
  forumURL,
  topicURL,
  children,
  cluster,
  ...props
}: Props) => {
  const { connection } = useConnection();
  const wallet = useWallet();

  function buildForumPath(collectionId: string) {
    return `${baseURL}${forumURL}/${collectionId}`;
  }

  function buildTopicPath(collectionId: string, topicId: number) {
    return `${baseURL}${forumURL}/${collectionId}${topicURL}/${topicId}`;
  }

  const dispatchProps: DispatchAppProps = {
    wallet: wallet,
    connection: connection,
    buildForumPath: buildForumPath,
    buildTopicPath: buildTopicPath,
    children: children,
    cluster: cluster as any,
  };

  return <DispatchProvider {...dispatchProps}>{children}</DispatchProvider>;
};

export default DispatchApp;
