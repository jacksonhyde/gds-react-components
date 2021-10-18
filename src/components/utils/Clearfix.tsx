import React, { HTMLProps } from 'react';

const Clearfix: React.FC<HTMLProps<HTMLDivElement>> = (props) => (
  <div className="govuk-u-clear" {...props} />
);

export default Clearfix;
