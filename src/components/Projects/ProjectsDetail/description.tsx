import { Box, Button, Flex, VStack } from '@chakra-ui/react';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Dispatch, SetStateAction } from 'react';
import { GoBold } from 'react-icons/go';
// import parse from 'html-react-parser';
import {
  AiOutlineLink,
  AiOutlineOrderedList,
  AiOutlineStrikethrough,
} from 'react-icons/ai';
import { BiFontColor } from 'react-icons/bi';
import {
  BsBlockquoteLeft,
  BsCodeSlash,
  BsFileBreak,
  BsTypeItalic,
} from 'react-icons/bs';
import { CiRedo, CiUndo } from 'react-icons/ci';
import {
  MdOutlineFormatListBulleted,
  MdOutlineHorizontalRule,
} from 'react-icons/md';

interface Props {
  setData: Dispatch<SetStateAction<string>>;
}
export const Description = ({ setData }: Props) => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure(),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setData(html);
    },
    editorProps: {
      attributes: {
        class:
          'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
      </p>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
    `,
  });
  return (
    <>
      <VStack
        mt={10}
        mx={'auto'}
        h={'50rem !impotant'}
        minH={'50rem'}
        w={'3xl'}
      >
        <Flex
          w={'full'}
          align={'center'}
          justify={'start'}
          borderBottom={'1px solid #D2D2D2'}
        >
          <Button
            borderLeft={'1px solid #D2D2D2'}
            variant={'unstyled'}
            borderRadius={'0px'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            bg={editor?.isActive('heading', { level: 1 }) ? 'gray.200' : ''}
            onClick={() => {
              editor?.chain().focus().toggleHeading({ level: 1 }).run();
            }}
          >
            H1
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            bg={editor?.isActive('heading', { level: 2 }) ? 'gray.200' : ''}
            onClick={() => {
              editor?.chain().focus().toggleHeading({ level: 2 }).run();
            }}
          >
            H2
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            bg={editor?.isActive('heading', { level: 3 }) ? 'gray.200' : ''}
            onClick={() => {
              editor?.chain().focus().toggleHeading({ level: 3 }).run();
            }}
          >
            H3
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            bg={editor?.isActive('heading', { level: 4 }) ? 'gray.200' : ''}
            onClick={() => {
              editor?.chain().focus().toggleHeading({ level: 4 }).run();
            }}
          >
            H4
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            bg={editor?.isActive('heading', { level: 5 }) ? 'gray.200' : ''}
            onClick={() => {
              editor?.chain().focus().toggleHeading({ level: 5 }).run();
            }}
          >
            H5
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            bg={editor?.isActive('heading', { level: 6 }) ? 'gray.200' : ''}
            onClick={() => {
              editor?.chain().focus().toggleHeading({ level: 6 }).run();
            }}
          >
            H6
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            bg={editor?.isActive('bold') ? 'gray.200' : ''}
            onClick={() => {
              editor?.chain().focus().toggleBold().run();
            }}
          >
            <GoBold />
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            bg={editor?.isActive('italic') ? 'gray.200' : ''}
            onClick={() => {
              editor?.chain().focus().toggleItalic().run();
            }}
          >
            <BsTypeItalic />
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            bg={editor?.isActive('link') ? 'gray.200' : ''}
            onClick={() => {}}
          >
            <AiOutlineLink />
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            bg={editor?.isActive('strike') ? 'gray.200' : ''}
            onClick={() => {
              editor?.chain().focus().toggleStrike().run();
            }}
          >
            <AiOutlineStrikethrough />
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            bg={editor?.isActive('bulletList') ? 'gray.200' : ''}
            onClick={() => {
              editor?.chain().focus().toggleBulletList().run();
            }}
          >
            <MdOutlineFormatListBulleted />
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            bg={editor?.isActive('orderedList') ? 'gray.200' : ''}
            onClick={() => {
              editor?.chain().focus().toggleOrderedList().run();
            }}
          >
            <AiOutlineOrderedList />
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            bg={editor?.isActive('codeBlock') ? 'gray.200' : ''}
            onClick={() => {
              editor?.chain().focus().toggleCodeBlock().run();
            }}
          >
            <BsCodeSlash />
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            bg={editor?.isActive('blockquote') ? 'gray.200' : ''}
            onClick={() => {
              editor?.chain().focus().toggleBlockquote().run();
            }}
          >
            <BsBlockquoteLeft />
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            onClick={() => {
              editor?.chain().focus().setHorizontalRule().run();
            }}
          >
            <MdOutlineHorizontalRule />
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            onClick={() => {
              editor?.chain().focus().setHardBreak().run();
            }}
          >
            <BsFileBreak />
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            w={'full'}
            onClick={() => {
              editor?.chain().focus().undo().run();
            }}
          >
            <CiUndo />
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            w={'full'}
            onClick={() => {
              editor?.chain().focus().redo().run();
            }}
          >
            <CiRedo />
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'0px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderTop={'1px solid #D2D2D2'}
            borderRight={'1px solid #D2D2D2'}
            onClick={() => {}}
            w={'full'}
          >
            <BiFontColor />
          </Button>
        </Flex>

        <Box w={'full'} height={'full'}>
          <div style={{ height: '100% !important' }} className="reset">
            <EditorContent
              style={{}}
              width={'100%'}
              height={'100%'}
              editor={editor}
            />
          </div>
        </Box>
      </VStack>
    </>
  );
};
