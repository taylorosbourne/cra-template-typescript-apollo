import React, { FC } from 'react';

import { Blurb, Code } from './scripts-styles';

const Scripts: FC = () => (
	<>
		<h1>cra-template-typescript-apollo || scripts</h1>
		<Blurb>
			You'll find a 'scripts' directory in the root of your project.
			You can make those scripts executable by running:
		</Blurb>
		<Code>
			<code>
				chmod +x scripts/*
			</code>
		</Code>
		<Blurb>
			There are two scripts available to you after intial creation of
			your project.  The first of these is the 'component-gen' script.
		</Blurb>
		<Blurb>
			The 'component-gen' script will generate components from the
			command line. And is run like so:
		</Blurb>
		<Code>
			<code>
				./component-gen.sh {'<type> <name>'}
			</code>
		</Code>
		<Blurb>
			An npm script is included called 'generate' that lets you use
			the following instead.
		</Blurb>
		<Code>
			<code>
				yarn generate {'<type> <name>'}
			</code>
		</Code>
		<Blurb>
			There are three valid types:{" "}
			<span>component</span>,{" "}
			<span>container</span>,{" "}
			<span>page</span>.{" "}
			example:
		</Blurb>
		<Code>
			<code>
				yarn generate component button
			</code>
		</Code>
		<Blurb>
			The example script will generate a <span>button dir</span> in
			the <span>components directory</span>.  Inside of that dir you
			will see a folder structure that resembles the following:
		</Blurb>
		<Code>
			<code>
				components{"\n"}
				-- button{"\n"}
				----button-styles.ts{"\n"}
				----button-types.ts{"\n"}
				----button.tsx{"\n"}
				----package.json{"\n"}
			</code>
		</Code>
		<Blurb>
			This script can be used to generate page, and container components as well.
		</Blurb>
	</>
);

export default Scripts;
