import React, { FC } from 'react';

import { Blurb, AnchorLink } from './about-styles';

const About: FC = () => (
	<>
		<h1>cra-template-typescript-apollo</h1>
		<Blurb>
			Hello, thanks for checking out this template. This template extends the
			base TypeScript CRA Template, and includes an apollo connection,
			styled-components, and an "ideal" folder structure.
		</Blurb>
		<Blurb>
			This template was made with personal-use in mind.  It might not be for you,
			but it works for me <span role="img" aria-label="emoji">😅</span>
		</Blurb>
		<Blurb>
			<AnchorLink
				href="https://github.com/taylorosbourne/cra-template-typescript-apollo"
			>
				source
			</AnchorLink>
		</Blurb>
	</>
);

export default About;
