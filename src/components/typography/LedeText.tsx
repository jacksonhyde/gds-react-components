import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const LedeText: React.FC<HTMLProps<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={classNames('govuk-lede-text', className)} {...rest} />
);

export default LedeText;
