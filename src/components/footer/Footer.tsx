import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { Container } from '../layout';

interface FooterListProps extends HTMLProps<HTMLOListElement> {
  columns?: number;
}

const FooterList: React.FC<FooterListProps> = ({ className, columns, ...rest }) => (
  <ul
    className={classNames(
      'govuk-footer__list',
      { [`govuk-footer__list--columns-${columns}`]: columns },
      className,
    )}
    {...rest}
  />
);

const FooterInlineList: React.FC<FooterListProps> = ({ className, columns, ...rest }) => (
  <ul
    className={classNames('govuk-footer__inline-list', className)}
    {...rest}
  />
);

const FooterListItem: React.FC<HTMLProps<HTMLAnchorElement>> = ({ className, ...rest }) => (
  <li className="govuk-footer__list-item">
    <a className={classNames('govuk-footer__link', className)} {...rest} />
  </li>
);

const FooterInlineListItem: React.FC<HTMLProps<HTMLAnchorElement>> = ({ className, ...rest }) => (
  <li className="govuk-footer__inline-list-item">
    <a className={classNames('govuk-footer__link', className)} {...rest} />
  </li>
);


const FooterNavigation: React.FC<HTMLProps<HTMLDivElement>> = ({
  className, children, ...rest
}) => (
  <div className={classNames('govuk-footer__navigation', className)} {...rest}>
    {children}
  </div>
);


const FooterSection: React.FC<HTMLProps<HTMLDivElement>> = ({
  className, children, ...rest
}) => (
  <div className={classNames('govuk-footer__section', className)} {...rest}>
    {children}
  </div>
);

const FooterSectionHeader: React.FC<HTMLProps<HTMLHeadingElement>> = ({
  className, children, ...rest
}) => (
  <h2 className={classNames('govuk-footer__heading govuk-heading-m', className)} {...rest}>
    {children}
  </h2>
);

const FooterSectionBreak: React.FC<HTMLProps<HTMLHRElement>> = ({
  className, ...rest
}) => (
  <hr className={classNames('govuk-footer__section-break', className)} {...rest} />
);

const FooterCopyright: React.FC<HTMLProps<HTMLParagraphElement>> = ({ className, children, ...rest }) => (
  <a className="govuk-footer__link govuk-footer__copyright-logo" href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">{children}</a>
);

const FooterOGL: React.FC<HTMLProps<HTMLDivElement>> = () => (
  <React.Fragment>
    <svg aria-hidden="true" focusable="false" className="govuk-footer__licence-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 483.2 195.7" height="17" width="41">
      <path fill="currentColor" d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"></path>
    </svg>
    <span className="govuk-footer__licence-description">All content is available under the <a className="govuk-footer__link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated</span>
  </React.Fragment>
);

const FooterMeta: React.FC<HTMLProps<HTMLDivElement>> = ({
  className, children, ...rest
}) => (
  <div className={classNames('govuk-footer__meta', className)} {...rest}>
    {children}
  </div>
);

const FooterMetaItem: React.FC<HTMLProps<HTMLDivElement>> = ({
  className, children, ...rest
}) => (
  <div className={classNames('govuk-footer__meta-item', className)} {...rest}>
    {children}
  </div>
);

interface FooterProps extends HTMLProps<HTMLDivElement> {
  visuallyHiddenText?: false | string;
}

const Footer: Footer = ({
  className, children, ...rest
}) => (
  <footer className={classNames('govuk-footer', className)} {...rest}>
    <Container>
      {children}
    </Container>
  </footer>
);


interface Footer extends React.FC<FooterProps> {
  List: React.FC<FooterListProps>;
  ListItem: React.FC<HTMLProps<HTMLAnchorElement>>;
  InlineList: React.FC<FooterListProps>;
  InlineListItem: React.FC<HTMLProps<HTMLAnchorElement>>;
  Copyright: React.FC<HTMLProps<HTMLParagraphElement>>;
  Meta: React.FC<HTMLProps<HTMLDivElement>>;
  MetaItem: React.FC<HTMLProps<HTMLDivElement>>;
  OGL: React.FC<HTMLProps<HTMLDivElement>>;
  Section: React.FC<HTMLProps<HTMLDivElement>>;
  SectionHeader: React.FC<HTMLProps<HTMLHeadingElement>>;
  SectionBreak: React.FC<HTMLProps<HTMLHRElement>>;
  Nav: React.FC<HTMLProps<HTMLDivElement>>;
}

Footer.List = FooterList;
Footer.ListItem = FooterListItem;
Footer.Copyright = FooterCopyright;
Footer.Meta = FooterMeta;
Footer.OGL = FooterOGL;
Footer.Section = FooterSection;
Footer.SectionHeader = FooterSectionHeader;
Footer.SectionBreak = FooterSectionBreak;
Footer.Nav = FooterNavigation;
Footer.InlineList = FooterInlineList;
Footer.InlineListItem = FooterInlineListItem;
Footer.MetaItem = FooterMetaItem;

export default Footer;
