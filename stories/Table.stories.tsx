import React from 'react';
import { Col, Hint, Row, Table } from '../src';

export const StandardTable = (): JSX.Element => (
  <Table caption="Other possible causes of your symptoms">
    <Table.Head>
      <Table.Row>
        <Table.Cell>Skin Symptoms</Table.Cell>
        <Table.Cell>Possible cause</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Blisters on lips or around the mouth</Table.Cell>
        <Table.Cell>cold sores</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Itchy, dry, cracked, sore</Table.Cell>
        <Table.Cell>eczema</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Itchy blisters</Table.Cell>
        <Table.Cell>shingles, chickenpox</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default {
  title: 'Components/Table',
  component: Table,
};
