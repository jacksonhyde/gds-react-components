import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const TableContainer: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('govuk-table-container', className)} {...rest} />
);
TableContainer.displayName = 'Table.Container';

export default TableContainer;
