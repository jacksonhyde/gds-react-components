import React, { HTMLProps } from 'react';
import classNames from 'classnames';

export type HintProps = HTMLProps<HTMLDivElement>;

const Hint: React.FC<HintProps> = ({ className, ...rest }) => (
  <div className={classNames('govuk-hint', className)} {...rest} />
);

export default Hint;
