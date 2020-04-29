import React, { FC } from 'react';

import { Props } from './layout-types';
import { Main } from './layout-styles';
import { Nav } from '../../components';

const Layout: FC<Props> = ({ children }) => (
	<>
		<Nav links={['about', 'scripts']} />
		<Main>{children}</Main>
	</>
);

export default Layout;
