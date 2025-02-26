import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import TableSectionContext, { TableSection } from '../TableSectionContext';

const TableHead: React.FC<HTMLProps<HTMLTableSectionElement>> = ({
  className,
  children,
  ...rest
}) => (
  <thead className={classNames('govuk-table__head', className)} {...rest}>
    <TableSectionContext.Provider value={TableSection.HEAD}>
      {children}
    </TableSectionContext.Provider>
  </thead>
);

TableHead.displayName = 'Table.Head';

export default TableHead;
