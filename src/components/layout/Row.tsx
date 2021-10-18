import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const Row: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('govuk-grid-row', className)} {...rest} />
);

export default Row;
