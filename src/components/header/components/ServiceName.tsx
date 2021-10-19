import React, { HTMLProps } from 'react';
import classNames from 'classnames';

export interface ServiceNameProps extends HTMLProps<HTMLAnchorElement> {
  long?: boolean;
}

const ServiceName: React.FC<ServiceNameProps> = ({
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
    <a className="govuk-header__link govuk-header__link--service-name" {...rest} />
  </div>
);

export default ServiceName;
