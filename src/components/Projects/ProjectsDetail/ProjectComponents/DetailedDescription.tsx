import { Box } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

import { Link, LinkProps } from '@chakra-ui/react';

export const ProjectsDetailedDescription = ({
  description,
}: {
  description: string;
}) => {
  const projectDescription =
    description[0] === '"' ? JSON.parse(description) : description;

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
      <Box as="p" textStyle={'title2'} pt="2rem" pb="0.8rem">
        About Project
      </Box>
      <ReactMarkdown
        components={ChakraUIRenderer(newTheme)}
        remarkPlugins={[remarkGfm]}
      >
        {projectDescription}
      </ReactMarkdown>
    </Box>
  );
};
