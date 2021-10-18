import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { Container } from '../layout';

interface FooterListProps extends HTMLProps<HTMLOListElement> {
  columns?: boolean;
}

const FooterList: React.FC<FooterListProps> = ({ className, columns, ...rest }) => (
  <ul
    className={classNames(
      'govuk-footer__list',
      { 'govuk-footer__list--three-columns': columns },
      className,
    )}
    {...rest}
  />
);

const FooterListItem: React.FC<HTMLProps<HTMLAnchorElement>> = ({ className, ...rest }) => (
  <li className="govuk-footer__list-item">
    <a className={classNames('govuk-footer__list-item-link', className)} {...rest} />
  </li>
);

const FooterCopyright: React.FC<HTMLProps<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={classNames('govuk-footer__copyright', className)} {...rest} />
);

interface FooterProps extends HTMLProps<HTMLDivElement> {
  visuallyHiddenText?: false | string;
}

interface Footer extends React.FC<FooterProps> {
  List: React.FC<FooterListProps>;
  ListItem: React.FC<HTMLProps<HTMLAnchorElement>>;
  Copyright: React.FC<HTMLProps<HTMLParagraphElement>>;
}

const Footer: Footer = ({
  className, children, visuallyHiddenText, ...rest
}) => (
  <footer {...rest}>
    <div className={classNames('govuk-footer', className)}>
      <Container>
        {visuallyHiddenText ? (
          <h2 className="govuk-u-visually-hidden">{visuallyHiddenText}</h2>
        ) : null}
        {children}
      </Container>
    </div>
  </footer>
);

Footer.defaultProps = {
  visuallyHiddenText: 'Support links',
};

Footer.List = FooterList;
Footer.ListItem = FooterListItem;
Footer.Copyright = FooterCopyright;

export default Footer;
