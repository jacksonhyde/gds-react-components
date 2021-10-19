import React, { PureComponent, HTMLProps } from 'react';
import classNames from 'classnames';
import GovUKLogo, { GovUKLogoNavProps } from './components/GovUKLogo';
import HeaderContext, { IHeaderContext } from './HeaderContext';
import Search from './components/Search';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import NavItemList from './components/NavItemList';
import NavMenuClose from './components/NavMenuClose';
import { Container } from '../layout';
import Content from './components/Content';
import MenuToggle from './components/MenuToggle';
import ServiceName from './components/ServiceName';
import NavTitle from './components/NavTitle';
import NavContainer from './components/NavContainer';

const BaseHeaderLogo: React.FC<GovUKLogoNavProps> = (props) => {
  return <GovUKLogo {...props} />;
};

const HeaderContainer: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <Container className={classNames('govuk-header__container', className)} {...rest} />
);

interface HeaderProps extends HTMLProps<HTMLDivElement> {
  transactional?: boolean;
  orgName?: string;
  orgSplit?: string;
  orgDescriptor?: string;
  serviceName?: string;
  white?: boolean;
}

interface HeaderState {
  hasMenuToggle: boolean;
  hasSearch: boolean;
  menuOpen: boolean;
  searchOpen: boolean;
}

class Header extends PureComponent<HeaderProps, HeaderState> {
  static Logo = BaseHeaderLogo;

  static Search = Search;

  static Nav = Nav;

  static NavTitle = NavTitle;

  static NavContainer = NavContainer;

  static NavItemList = NavItemList;

  static NavItem = NavItem;

  static NavMenuClose = NavMenuClose;

  static Container = HeaderContainer;

  static Content = Content;

  static MenuToggle = MenuToggle;

  static ServiceName = ServiceName;

  static defaultProps = {
    role: 'banner',
  };

  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      hasMenuToggle: false,
      hasSearch: false,
      menuOpen: false,
      searchOpen: false,
    };
  }

  setMenuToggle = (toggle: boolean): void => {
    this.setState({ hasMenuToggle: toggle });
  };

  setSearch = (toggle: boolean): void => {
    this.setState({ hasSearch: toggle });
  };

  toggleMenu = (): void => {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  };

  toggleSearch = (): void => {
    this.setState((state) => ({ searchOpen: !state.searchOpen }));
  };

  render(): JSX.Element {
    const {
      className,
      children,
      transactional,
      orgName,
      orgSplit,
      orgDescriptor,
      serviceName,
      white,
      ...rest
    } = this.props;
    const {
      hasSearch, hasMenuToggle, menuOpen, searchOpen,
    } = this.state;
    const contextValue: IHeaderContext = {
      orgName,
      orgSplit,
      orgDescriptor,
      serviceName,
      hasSearch,
      hasMenuToggle,
      setMenuToggle: this.setMenuToggle,
      setSearch: this.setSearch,
      toggleMenu: this.toggleMenu,
      toggleSearch: this.toggleSearch,
      menuOpen,
      searchOpen,
    };
    return (
      <header
        className={classNames(
          'govuk-header',
          { 'govuk-header--transactional': transactional },
          { 'govuk-header--organisation': orgName },
          { 'govuk-header--white': white },
          className,
        )}
        {...rest}
      >
        <HeaderContext.Provider value={contextValue}>{children}</HeaderContext.Provider>
      </header>
    );
  }
}

export default Header;
