import React, { HTMLProps } from 'react';
import classNames from 'classnames';

export interface ErrorMessageProps extends HTMLProps<HTMLSpanElement> {
  visuallyHiddenText?: false | string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  className,
  visuallyHiddenText,
  children,
  ...rest
}) => (
  <span className={classNames('govuk-error-message', className)} {...rest}>
    {visuallyHiddenText !== false ? (
      <span className="govuk-u-visually-hidden">{visuallyHiddenText}</span>
    ) : null}
    {children}
  </span>
);

ErrorMessage.defaultProps = {
  visuallyHiddenText: 'Error: ',
  role: 'alert',
};

export default ErrorMessage;
