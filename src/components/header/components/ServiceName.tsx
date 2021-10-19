import React, { HTMLProps } from 'react';
import classNames from 'classnames';

export interface ServiceNameProps extends HTMLProps<HTMLAnchorElement> {
  long?: boolean;
}

const ServiceName: React.FC<ServiceNameProps> = ({
  ...rest
}) => (
  <div className="govuk-header__content">
    <a className="govuk-header__link govuk-header__link--service-name" {...rest} />
  </div>
);

export default ServiceName;
