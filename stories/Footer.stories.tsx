import React from 'react';
import { Footer } from '../src';

export const Standard = (): JSX.Element => (
  <>
    <div id="restOfThePage" style={{ height: '60vh' }} />
    <Footer>
      <Footer.Meta>
        <Footer.MetaItem className="govuk-footer__meta-item--grow">
          <Footer.OGL />
        </Footer.MetaItem>
        <Footer.MetaItem>
          <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
        </Footer.MetaItem>
      </Footer.Meta>
    </Footer>
  </>
);

export const WithThreeColumns = (): JSX.Element => (
  <>
    <div id="restOfThePage" style={{ height: '60vh' }} />
    <Footer>
      <Footer.Nav>
        <Footer.Section>
          <Footer.SectionHeader>Two column list</Footer.SectionHeader>
          <Footer.List columns={2}>
            <Footer.ListItem href="#example1">Navigation item 1</Footer.ListItem>
            <Footer.ListItem href="#example2">Navigation item 2</Footer.ListItem>
            <Footer.ListItem href="#example3">Navigation item 3</Footer.ListItem>
            <Footer.ListItem href="#example4">Navigation item 4</Footer.ListItem>
            <Footer.ListItem href="#example5">Navigation item 5</Footer.ListItem>
            <Footer.ListItem href="#example6">Navigation item 6</Footer.ListItem>
          </Footer.List>
        </Footer.Section>
        <Footer.Section>
          <Footer.SectionHeader>Single column list</Footer.SectionHeader>
          <Footer.List columns={1}>
            <Footer.ListItem href="#example7">Navigation item 7</Footer.ListItem>
            <Footer.ListItem href="#example8">Navigation item 8</Footer.ListItem>
            <Footer.ListItem href="#example9">Navigation item 9</Footer.ListItem>
          </Footer.List>
        </Footer.Section>
      </Footer.Nav>
      <Footer.SectionBreak />
      <Footer.Meta>
        <Footer.MetaItem className="govuk-footer__meta-item--grow">
          <Footer.InlineList>
            <Footer.InlineListItem href="#example1">Item 1</Footer.InlineListItem>
            <Footer.InlineListItem href="#example2">Item 2</Footer.InlineListItem>
            <Footer.InlineListItem href="#example3">Item 3</Footer.InlineListItem>
          </Footer.InlineList>
          <Footer.OGL />
        </Footer.MetaItem>
        <Footer.MetaItem>
          <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
        </Footer.MetaItem>
      </Footer.Meta>
    </Footer>
  </>
);

export const WithLinksToMetaInformation = (): JSX.Element => (
  <>
    <div id="restOfThePage" style={{ height: '60vh' }} />
    <Footer>
      <Footer.Meta>
        <Footer.MetaItem className="govuk-footer__meta-item--grow">
          <Footer.InlineList>
            <Footer.InlineListItem href="#example1">Item 1</Footer.InlineListItem>
            <Footer.InlineListItem href="#example2">Item 2</Footer.InlineListItem>
            <Footer.InlineListItem href="#example3">Item 3</Footer.InlineListItem>
          </Footer.InlineList>
          <Footer.OGL />
        </Footer.MetaItem>
        <Footer.MetaItem>
          <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
        </Footer.MetaItem>
      </Footer.Meta>
    </Footer>
  </>
);

export default {
  title: 'Components/Footer',
  component: Footer,
};
