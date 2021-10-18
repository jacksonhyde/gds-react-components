import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  fluid?: boolean;
}

const Container: React.FC<ContainerProps> = ({ className, fluid, ...rest }) => (
  <div
    className={classNames(
      { 'govuk-width-container': !fluid },
      { 'govuk-width-container-fluid': fluid },
      className,
    )}
    {...rest}
  />
);

export default Container;
