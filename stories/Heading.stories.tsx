import React from 'react';
import { Heading, Hint } from '../src';

const CodeText: React.FC = (props) => (
  <span
    style={{
      fontFamily: 'monospace',
      marginLeft: 5,
      marginRight: 5,
      fontSize: 14,
      padding: 3,
      backgroundColor: 'rgba(255, 0, 0, 0.15)',
      borderRadius: 5,
    }}
    {...props}
  />
);

export const Headings = (): JSX.Element => (
  <>
    <Heading headingLevel='h1' headingSize='l'>Large h1</Heading>
    <Heading headingLevel='h2' headingSize='m'>Medium h2</Heading>
    <Heading headingLevel='h3' headingSize='s'>Small h3</Heading>
  </>
);

export const WithCaptions = (): JSX.Element => (
  <>
  <Heading headingLevel='h1' headingSize='xl' caption="X-Large Caption" captionSize="xl">X-Large h1</Heading>
  <Heading headingLevel='h1' headingSize='l' caption="X-Large Caption" captionSize="l">Large h1</Heading>
  <Heading headingLevel='h1' headingSize='m' caption="X-Large Caption" captionSize="m">Medium h1</Heading>
  </>
);


export default {
  title: 'Components/Heading',
  component: Heading,
};
