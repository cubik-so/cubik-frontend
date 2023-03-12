import React, { ComponentType } from 'react';

interface WithAuthProps {
  isAuthenticated: boolean;
}

const withAuth = <P extends object>(
  Component: ComponentType<P>
): React.FC<P & WithAuthProps> => {
  const WithAuth: React.FC<P & WithAuthProps> = (props) => {
    const { isAuthenticated, ...rest } = props as WithAuthProps;
    if (!isAuthenticated) {
      //   return <Redirect to="/login" />;
    }
    return <Component {...(rest as P)} />;
  };
  return WithAuth;
};

export default withAuth;
