import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const Divider: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('govuk-radios__divider', className)} {...rest} />
);

export default Divider;
