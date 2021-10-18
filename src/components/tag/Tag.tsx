import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface TagProps extends HTMLProps<HTMLSpanElement> {
  color?:
  | 'white'
  | 'grey'
  | 'green'
  | 'aqua-green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow';
}

const Tag: React.FC<TagProps> = ({ className, color, ...rest }) => (
  <strong
    className={classNames('govuk-tag', { [`govuk-tag--${color}`]: color }, className)}
    {...rest}
  />
);

export default Tag;
