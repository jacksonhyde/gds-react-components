import React, { HTMLProps, useContext, useEffect } from 'react';
import classNames from 'classnames';
import { Search as SearchIcon, Close as CloseIcon } from '../../icons';
import HeaderContext, { IHeaderContext } from '../HeaderContext';

export interface SearchProps extends HTMLProps<HTMLInputElement> {
  visuallyHiddenText?: string;
}

const Search: React.FC<SearchProps> = ({
  action, method, id, visuallyHiddenText, ...rest
}) => {
  const { setSearch, toggleSearch, searchOpen } = useContext<IHeaderContext>(HeaderContext);
  useEffect(() => {
    setSearch(true);
    return () => setSearch(false);
  }, []);
  return (
    <div className="govuk-header__search">
      <button
        className={classNames('govuk-header__search-toggle', { 'is-active': searchOpen })}
        aria-label="Open search"
        aria-expanded={searchOpen ? 'true' : 'false'}
        onClick={toggleSearch}
      >
        <SearchIcon />
        <span className="govuk-u-visually-hidden">Search</span>
      </button>
      <div className={classNames('govuk-header__search-wrap', { 'js-show': searchOpen })}>
        <form className="govuk-header__search-form" action={action} method={method} role="search">
          <label className="govuk-u-visually-hidden" htmlFor={id}>
            {visuallyHiddenText}
          </label>
          <input className="govuk-search__input" id={id} {...rest} />
          <button className="govuk-search__submit" type="submit">
            <SearchIcon />
            <span className="govuk-u-visually-hidden">Search</span>
          </button>
          <button className="govuk-search__close">
            <CloseIcon />
            <span className="govuk-u-visually-hidden">Close search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

Search.defaultProps = {
  method: 'get',
  role: 'search',
  id: 'search-field',
  visuallyHiddenText: 'Search the NHS website',
  type: 'search',
  autoComplete: 'off',
  placeholder: 'Search',
};

export default Search;
