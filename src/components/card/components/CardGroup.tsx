import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { Row } from '../../layout';

const CardGroup: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <Row className={classNames('govuk-card-group', className)} {...rest} />
);

export default CardGroup;
