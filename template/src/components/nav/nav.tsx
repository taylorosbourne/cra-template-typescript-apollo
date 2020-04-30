import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Props } from './nav-types';
import { StyledNav } from './nav-styles';

const Nav: FC<Props> = ({ links }) => (
	<StyledNav>
		<ul>
			{links &&
				links.map((link, i) => {
					return (
						<li>
							<Link key={i} to={`/${link}`} cy-data={link}>
								{link}
							</Link>
						</li>
					);
				})}
		</ul>
	</StyledNav>
);

export default Nav;
