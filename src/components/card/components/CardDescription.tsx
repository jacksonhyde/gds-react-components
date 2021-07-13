import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const CardDescription: React.FC<HTMLProps<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={classNames('govuk-card__description', className)} {...rest} />
);

export default CardDescription;
