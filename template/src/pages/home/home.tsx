import React, { FC } from 'react';

import { Blurb, EditLine } from './home-styles';
import { Cra, Apollo, Graphql } from '../../assets';
import { ImgContainer } from '../../containers';

const Home: FC = () => (
	<>
		<ImgContainer imgs={[Cra, Apollo, Graphql]} />
		<h1>cra-template-typescript-apollo</h1>
		<Blurb>
			Hello, thanks for checking out this template. This template extends the
			base TypeScript CRA Template, and includes an apollo connection,
			styled-components, and an "ideal" folder structure.
		</Blurb>
		<EditLine>
			Edit <span>src/pages/home/home.tsx</span> to view changes
		</EditLine>
	</>
);

export default Home;
