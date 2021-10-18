import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { govukSize } from '../../util/types/NHSUKTypes';

export interface LabelProps extends Omit<HTMLProps<HTMLLabelElement>, 'size'> {
  bold?: boolean;
  isPageHeading?: boolean;
  size?: govukSize;
}

const BaseLabel: React.FC<LabelProps> = ({
  className, bold, size, isPageHeading, ...rest
}) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label
    className={classNames(
      'govuk-label',
      { 'govuk-label--s': bold && !size },
      { 'govuk-label--xl': isPageHeading && !size },
      { [`govuk-label--${size}`]: size },
      className,
    )}
    {...rest}
  />
);

const Label: React.FC<LabelProps> = ({ isPageHeading, ...rest }) => {
  if (isPageHeading) {
    return (
      <h1 className="govuk-label-wrapper">
        <BaseLabel isPageHeading {...rest} />
      </h1>
    );
  }
  return <BaseLabel {...rest} />;
};

export default Label;
