import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const ReadingWidth: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('govuk-u-reading-width', className)} {...rest} />
);

export default ReadingWidth;
