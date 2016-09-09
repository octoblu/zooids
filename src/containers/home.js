import React from 'react'
import InstallIcon from 'react-icons/lib/md/file-download'

import Button from 'zooid-button'
import Heading from 'zooid-heading'
import Input from 'zooid-input'


import Example from '../components/Example/'
import Table from '../components/Table/'

const Home = () => {
  return (
    <div>
      <Heading>Buttons</Heading>

      <pre><InstallIcon />npm install zooid-button --save</pre>

      <Heading level={4}>Props</Heading>
      <Table>
        <thead>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </thead>
        <tbody>
          <tr>
            <td>kind</td>
            <td>string</td>
            <td>'default'</td>
            <td>Choose from default, primary, approve, danger, neutral, hollow-primary, hollow-approve, hollow-danger, hollow-neutral, or no-style</td>
          </tr>
          <tr>
            <td>size</td>
            <td>string</td>
            <td>'regular'</td>
            <td>Choose from small, regular, or large</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>false</td>
            <td>Makes your button un-clickable</td>
          </tr>
          <tr>
            <td>block</td>
            <td>boolean</td>
            <td>false</td>
            <td>Makes your button have 100% width</td>
          </tr>
          <tr>
            <td>href</td>
            <td>string</td>
            <td></td>
            <td>Link to something by adding an href to your button</td>
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td></td>
            <td>Additional css classes for your button</td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>function</td>
            <td></td>
            <td>Add a custom function to decide what to do with button clicks</td>
          </tr>
        </tbody>
      </Table>

      <Example />

      <Heading>Input</Heading>

      <pre><InstallIcon />npm install zooid-input --save</pre>

      <Input />
      <Heading level={4}>Props</Heading>
      <Table>
        <thead>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </thead>
        <tbody>
          <tr>
            <td>kind</td>
            <td>string</td>
            <td>'default'</td>
            <td>Choose from default, primary, approve, danger, neutral, hollow-primary, hollow-approve, hollow-danger, hollow-neutral, or no-style</td>
          </tr>
          <tr>
            <td>size</td>
            <td>string</td>
            <td>'regular'</td>
            <td>Choose from small, regular, or large</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>false</td>
            <td>Makes your button un-clickable</td>
          </tr>
          <tr>
            <td>block</td>
            <td>boolean</td>
            <td>false</td>
            <td>Makes your button have 100% width</td>
          </tr>
          <tr>
            <td>href</td>
            <td>string</td>
            <td></td>
            <td>Link to something by adding an href to your button</td>
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td></td>
            <td>Additional css classes for your button</td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>function</td>
            <td></td>
            <td>Add a custom function to decide what to do with button clicks</td>
          </tr>
        </tbody>
      </Table>

      <Example />
    </div>
  )
}

export default Home
