import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface InsetTextProps extends HTMLProps<HTMLDivElement> {
  visuallyHiddenText?: string | false;
}

const InsetText: React.FC<InsetTextProps> = ({
  className,
  children,
  visuallyHiddenText,
  ...rest
}) => (
  <div className={classNames('govuk-inset-text', className)} {...rest}>
    {visuallyHiddenText ? (
      <span className="govuk-u-visually-hidden">{visuallyHiddenText}</span>
    ) : null}
    {children}
  </div>
);

InsetText.defaultProps = {
  visuallyHiddenText: 'Information: ',
};

export default InsetText;
