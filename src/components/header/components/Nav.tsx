import React, { HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import { Container } from '../../layout';
import { Close as CloseIcon } from '../../icons';
import HeaderContext, { IHeaderContext } from '../HeaderContext';

const Nav: React.FC<HTMLProps<HTMLDivElement>> = ({
  className, children, open, ...rest
}) => {
  const { menuOpen, toggleMenu } = useContext<IHeaderContext>(HeaderContext);

  return (
    <nav
      className={classNames(
        'govuk-header__navigation',
        { 'js-show': open !== undefined ? open : menuOpen },
        className,
      )}
      {...rest}
    >
      <Container>
        <p className="govuk-header__navigation-title">
          <span>Menu</span>
          <button className="govuk-header__navigation-close" type="button" onClick={toggleMenu}>
            <CloseIcon />
            <span className="govuk-u-visually-hidden">Close menu</span>
          </button>
        </p>
        <ul className="govuk-header__navigation-list">{children}</ul>
      </Container>
    </nav>
  );
};

export default Nav;
