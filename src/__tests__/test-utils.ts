import '@testing-library/jest-dom';
import { render, RenderOptions } from '@testing-library/react';
import 'mutationobserver-shim';
import { JSXElementConstructor, ReactElement } from 'react';
import AppProvider from '../providers/AppProvider';

const customRender = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  options: RenderOptions<
    typeof import('@testing-library/dom/types/queries'),
    HTMLElement,
    HTMLElement
  >
) =>
  render(ui, {
    wrapper: AppProvider,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
