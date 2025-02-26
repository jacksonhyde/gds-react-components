import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  secondary?: boolean;
  reverse?: boolean;
  as?: 'button';
}

interface ButtonLinkProps extends HTMLProps<HTMLAnchorElement> {
  disabled?: boolean;
  secondary?: boolean;
  reverse?: boolean;
  as?: 'a';
}

export const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  secondary,
  reverse,
  ...rest
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={classNames(
      'govuk-button',
      { 'govuk-button--disabled': disabled },
      { 'govuk-button--secondary': secondary },
      { 'govuk-button--reverse': reverse },
      className,
    )}
    disabled={disabled}
    aria-disabled={disabled ? 'true' : 'false'}
    {...rest}
  />
);

Button.defaultProps = {
  type: 'submit',
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  role,
  draggable,
  children,
  disabled,
  secondary,
  reverse,
  ...rest
}) => (
  <a
    className={classNames(
      'govuk-button',
      { 'govuk-button--disabled': disabled },
      { 'govuk-button--secondary': secondary },
      { 'govuk-button--reverse': reverse },
      className,
    )}
    role={role}
    aria-disabled={disabled ? 'true' : 'false'}
    draggable={draggable}
    {...rest}
  >
    {children}
  </a>
);

ButtonLink.defaultProps = {
  role: 'button',
  draggable: false,
};

const ButtonWrapper: React.FC<ButtonLinkProps | ButtonProps> = ({ href, as, ...rest }) => {
  if (as === 'a') {
    return <ButtonLink href={href} {...(rest as ButtonLinkProps)} />;
  }
  if (as === 'button') {
    return <Button {...(rest as ButtonProps)} />;
  }
  if (href) {
    return <ButtonLink href={href} {...(rest as ButtonLinkProps)} />;
  }
  return <Button {...(rest as ButtonProps)} />;
};

export default ButtonWrapper;
