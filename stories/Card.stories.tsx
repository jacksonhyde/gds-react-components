// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react';
// import { Card } from '../src';

// export const Standard = (): JSX.Element => (
//   <Card>
//     <Card.Content>
//       <Card.Heading>If you need help now but it&apos;s not an emergency</Card.Heading>
//       <Card.Description>
//         Go to
//         {' '}
//         <a href="#">111.nhs.uk</a>
//         {' '}
//         or
//         {' '}
//         <a href="#">call 111</a>
//       </Card.Description>
//     </Card.Content>
//   </Card>
// );

// export const ClickableCard = (): JSX.Element => (
//   <Card clickable>
//     <Card.Content>
//       <Card.Heading className="govuk-heading-m">
//         <Card.Link href="#">Introduction to care and support</Card.Link>
//       </Card.Heading>
//       <Card.Description>
//         A quick guide for people who have care and support needs and their carers
//       </Card.Description>
//     </Card.Content>
//   </Card>
// );

// export const CardWithImage = (): JSX.Element => (
//   <Card clickable>
//     <Card.Image
//       src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg"
//       alt=""
//     />
//     <Card.Content>
//       <Card.Heading className="govuk-heading-m">
//         <Card.Link href="#">Exercise</Card.Link>
//       </Card.Heading>
//       <Card.Description>
//         Programmes, workouts and tips to get you moving and improve your fitness and wellbeing
//       </Card.Description>
//     </Card.Content>
//   </Card>
// );

// export const FeatureCard = (): JSX.Element => (
//   <Card feature>
//     <Card.Content>
//       <Card.Heading>Feature card heading</Card.Heading>
//       <Card.Description>Feature card description</Card.Description>
//     </Card.Content>
//   </Card>
// );

// export const CardGroupHalves = (): JSX.Element => (
//   <Card.Group>
//     <Card.GroupItem width="one-half">
//       <Card clickable>
//         <Card.Content>
//           <Card.Heading className="govuk-heading-m">
//             <Card.Link href="#">Introduction to care and support</Card.Link>
//           </Card.Heading>
//           <Card.Description>
//             A quick guide for people who have care and support needs and their carers
//           </Card.Description>
//         </Card.Content>
//       </Card>
//     </Card.GroupItem>
//     <Card.GroupItem width="one-half">
//       <Card clickable>
//         <Card.Content>
//           <Card.Heading className="govuk-heading-m">
//             <Card.Link href="#">Help from social services and charities</Card.Link>
//           </Card.Heading>
//           <Card.Description>
//             Includes helplines, needs assessments, advocacy and reporting abuse
//           </Card.Description>
//         </Card.Content>
//       </Card>
//     </Card.GroupItem>
//     <Card.GroupItem width="one-half">
//       <Card clickable>
//         <Card.Content>
//           <Card.Heading className="govuk-heading-m">
//             <Card.Link href="#">Money, work and benefits</Card.Link>
//           </Card.Heading>
//           <Card.Description>
//             How to pay for care and support, and where you can get help with costs
//           </Card.Description>
//         </Card.Content>
//       </Card>
//     </Card.GroupItem>
//     <Card.GroupItem width="one-half">
//       <Card clickable>
//         <Card.Content>
//           <Card.Heading className="govuk-heading-m">
//             <Card.Link href="#">Care after a hospital stay</Card.Link>
//           </Card.Heading>
//           <Card.Description>
//             Includes hospital discharge and care and support afterwards
//           </Card.Description>
//         </Card.Content>
//       </Card>
//     </Card.GroupItem>
//   </Card.Group>
// );

// CardGroupHalves.storyName = 'Card Group (Halves)';

// export const CardGroupThirds = (): JSX.Element => (
//   <Card.Group>
//     <Card.GroupItem width="one-third">
//       <Card clickable>
//         <Card.Content>
//           <Card.Heading className="govuk-heading-m">
//             <Card.Link href="#">5 steps to mental health wellbeing</Card.Link>
//           </Card.Heading>
//           <Card.Description>
//             Practical advice to help you feel mentally and emotionally better
//           </Card.Description>
//         </Card.Content>
//       </Card>
//     </Card.GroupItem>
//     <Card.GroupItem width="one-third">
//       <Card clickable>
//         <Card.Content>
//           <Card.Heading className="govuk-heading-m">
//             <Card.Link href="#">Healthy weight</Card.Link>
//           </Card.Heading>
//           <Card.Description>
//             Check your BMI using our healthy weight calculator and find out if you&apos;re a healthy
//             weight
//           </Card.Description>
//         </Card.Content>
//       </Card>
//     </Card.GroupItem>
//     <Card.GroupItem width="one-third">
//       <Card clickable>
//         <Card.Content>
//           <Card.Heading className="govuk-heading-m">
//             <Card.Link href="#">Exercise</Card.Link>
//           </Card.Heading>
//           <Card.Description>
//             Programmes, workouts and tips to get you moving and improve your fitness and wellbeing
//           </Card.Description>
//         </Card.Content>
//       </Card>
//     </Card.GroupItem>
//   </Card.Group>
// );
// CardGroupThirds.storyName = 'Card Group (Thirds)';

// export const CardGroupQuarters = (): JSX.Element => (
//   <Card.Group>
//     <Card.GroupItem width="one-quarter">
//       <Card clickable>
//         <Card.Content>
//           <p className="govuk-heading-xl govuk-u-font-size-64 govuk-u-margin-bottom-1">
//             91
//             {' '}
//             <span className="govuk-u-visually-hidden">Applicants</span>
//           </p>
//           <Card.Link
//             href="#"
//             className="govuk-u-font-weight-normal govuk-u-font-size-19 govuk-link--no-visited-state"
//             style={{ display: 'block' }}
//           >
//             Applicants
//           </Card.Link>
//         </Card.Content>
//       </Card>
//     </Card.GroupItem>
//     <Card.GroupItem width="one-quarter">
//       <Card clickable>
//         <Card.Content>
//           <p className="govuk-heading-xl govuk-u-font-size-64 govuk-u-margin-bottom-1">
//             23
//             {' '}
//             <span className="govuk-u-visually-hidden">Jobs</span>
//           </p>
//           <Card.Link
//             href="#"
//             className="govuk-u-font-weight-normal govuk-u-font-size-19 govuk-link--no-visited-state"
//           >
//             Jobs
//           </Card.Link>
//         </Card.Content>
//       </Card>
//     </Card.GroupItem>
//     <Card.GroupItem width="one-quarter">
//       <Card clickable>
//         <Card.Content>
//           <p className="govuk-heading-xl govuk-u-font-size-64 govuk-u-margin-bottom-1">
//             8
//             {' '}
//             <span className="govuk-u-visually-hidden">Services</span>
//           </p>
//           <Card.Link
//             href="#"
//             className="govuk-u-font-weight-normal govuk-u-font-size-19 govuk-link--no-visited-state"
//           >
//             Services
//           </Card.Link>
//         </Card.Content>
//       </Card>
//     </Card.GroupItem>
//     <Card.GroupItem width="one-quarter">
//       <Card clickable>
//         <Card.Content>
//           <p className="govuk-heading-xl govuk-u-font-size-64 govuk-u-margin-bottom-1">
//             33
//             {' '}
//             <span className="govuk-u-visually-hidden">Messages</span>
//           </p>
//           <Card.Link
//             href="#"
//             className="govuk-u-font-weight-normal govuk-u-font-size-19 govuk-link--no-visited-state"
//           >
//             Messages
//           </Card.Link>
//         </Card.Content>
//       </Card>
//     </Card.GroupItem>
//   </Card.Group>
// );
// CardGroupQuarters.storyName = 'Card Group (Quarters)';

// export default {
//   title: 'Components/Card',
//   component: Card,
// };
