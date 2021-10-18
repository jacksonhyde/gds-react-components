import React, { HTMLProps, useContext, ChangeEvent } from 'react';
import classNames from 'classnames';
import Label, { LabelProps } from '../../label/Label';
import DateInputContext, { IDateInputContext } from '../DateInputContext';

export interface IndividualDateInputProps extends HTMLProps<HTMLInputElement> {
  labelProps?: LabelProps;
  inputType: 'day' | 'month' | 'year';
  inputRef?: (ref: HTMLInputElement | null) => void;
  error?: boolean;
}

const labels: Record<'day' | 'month' | 'year', string> = {
  day: 'Day',
  month: 'Month',
  year: 'Year',
};

const IndividualDateInput: React.FC<IndividualDateInputProps> = ({
  label,
  labelProps,
  inputType,
  className,
  id,
  name,
  onChange,
  inputRef,
  error,
  value,
  defaultValue,
  ...rest
}) => {
  const {
    id: ctxId,
    name: ctxName,
    error: ctxError,
    value: ctxValue,
    defaultValue: ctxDefaultValue,
    handleChange: ctxHandleChange,
    registerRef,
  } = useContext<IDateInputContext>(DateInputContext);

  const { className: labelClassName, ...restLabelProps } = labelProps || {};

  const inputID = id || `${ctxId}-${inputType}`;
  const inputName = name || `${ctxName}-${inputType}`;
  const inputValue = value !== undefined ? value : ctxValue?.[inputType];
  const inputDefaultValue = defaultValue !== undefined ? defaultValue : ctxDefaultValue?.[inputType];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    if (onChange) onChange(e);
    if (!e.isPropagationStopped()) {
      ctxHandleChange(inputType, e);
    }
  };

  const refCallback = (ref: HTMLInputElement | null) => {
    registerRef(inputType, ref);
    if (inputRef) inputRef(ref);
  };

  return (
    <div className="govuk-date-input__item">
      <div className="govuk-form-group">
        <Label
          className={classNames('govuk-date-input__label', labelClassName)}
          id={`${inputID}--label`}
          htmlFor={inputID}
          {...restLabelProps}
        >
          {label || labels[inputType]}
        </Label>
        <input
          className={classNames(
            'govuk-input govuk-date-input__input',
            { 'govuk-input--width-2': inputType === 'day' || inputType === 'month' },
            { 'govuk-input--width-4': inputType === 'year' },
            { 'govuk-input--error': error === undefined ? ctxError : error },
            className,
          )}
          value={inputValue}
          defaultValue={inputDefaultValue}
          id={inputID}
          aria-labelledby={restLabelProps.id || `${inputID}--label`}
          name={inputName}
          onChange={handleChange}
          ref={refCallback}
          {...rest}
        />
      </div>
    </div>
  );
};

IndividualDateInput.defaultProps = {
  pattern: '[0-9]*',
  inputMode: 'numeric',
  type: 'text',
};

export const DayInput: React.FC<Omit<IndividualDateInputProps, 'inputType'>> = (props) => (
  <IndividualDateInput inputType="day" {...props} />
);

export const MonthInput: React.FC<Omit<IndividualDateInputProps, 'inputType'>> = (props) => (
  <IndividualDateInput inputType="month" {...props} />
);

export const YearInput: React.FC<Omit<IndividualDateInputProps, 'inputType'>> = (props) => (
  <IndividualDateInput inputType="year" {...props} />
);
