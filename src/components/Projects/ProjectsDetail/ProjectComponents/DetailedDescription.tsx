import { Box, Heading } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import { Link, LinkProps } from '@chakra-ui/react';

export const ProjectsDetailedDescription = ({
  description,
}: {
  description: string;
}) => {
  const newTheme = {
    a: (props: LinkProps) => {
      const { children } = props;
      return (
        <Link color="#FF8EFF" href={props.href} isExternal>
          {children}
        </Link>
      );
    },
  };

  return (
    <Box>
      <Heading pb="0.5rem" fontSize={{ base: 'md', md: '2xl' }}>
        About Project
      </Heading>
      <ReactMarkdown components={ChakraUIRenderer(newTheme)}>
        {description}
      </ReactMarkdown>
    </Box>
  );
};
