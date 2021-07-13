import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const TableCaption: React.FC<HTMLProps<HTMLTableCaptionElement>> = ({ className, ...rest }) => (
  <caption className={classNames('govuk-table__caption', className)} {...rest} />
);
TableCaption.displayName = 'Table.Caption';

export default TableCaption;
