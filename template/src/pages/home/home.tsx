import React, { FC } from 'react';

import { Cra, Apollo, Graphql } from '../../assets';
import ImgContainer from '../../containers/imgContainer/imgContainer';

const Home: FC = () => (
  <>
    <h1>cra-template-typescript-apollo</h1>
    <ImgContainer imgs={[Cra, Apollo, Graphql]} />
  </>
);

export default Home;
