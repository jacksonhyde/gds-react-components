import React, { HTMLProps } from 'react';
import HeadingLevel, { HeadingLevelType } from '../../util/HeadingLevel';


export interface HeadingProps extends HTMLProps<HTMLHeadingElement> {
  headingSize?: string;
  headingLevel?: HeadingLevelType;
  caption?: string;
  captionSize?: string;
}

const Heading: React.FC<HeadingProps> = ({
  headingSize, headingLevel, caption, captionSize, ...rest
 }) => {  
  return (
    <React.Fragment>
      { caption ? <span className={`govuk-caption-${captionSize}`}>{caption}</span> : null}
      <HeadingLevel
        headingLevel={headingLevel}
        className={`govuk-heading-${headingSize}`}
        {...rest}
      />
    </React.Fragment>
  )
 };

Heading.defaultProps = {
  headingLevel: 'h2',
  headingSize: 'l',
}

export default Heading;
