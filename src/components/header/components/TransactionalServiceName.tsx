import React, { HTMLProps } from 'react';
import classNames from 'classnames';

export interface TransactionalServiceNameProps extends HTMLProps<HTMLAnchorElement> {
  long?: boolean;
}

const TransactionalServiceName: React.FC<TransactionalServiceNameProps> = ({
  className,
  long,
  ...rest
}) => (
  <div
    className={classNames(
      'govuk-header__transactional-service-name',
      { 'govuk-header__transactional-service-name--long': long },
      className,
    )}
  >
    <a className="govuk-header__transactional-service-name--link" {...rest} />
  </div>
);

export default TransactionalServiceName;
