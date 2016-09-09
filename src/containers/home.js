import React from 'react'
import Heading from 'zooid-heading'

import Example from '../components/Example/'
import ExampleCodeBlock from '../components/ExampleCodeBlock/'

const Home = () => {
  return (
    <div>
      <Heading>Buttons</Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <Example>
        <ExampleCodeBlock>
          <Highlight className="jsx">Something</Highlight>
        </ExampleCodeBlock>
      </Example>
    </div>
  )
}

export default Home
