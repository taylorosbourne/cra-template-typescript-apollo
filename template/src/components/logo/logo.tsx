import React, { FC } from 'react';

import { Props } from './logo-types';
import { StyledLogo } from './logo-styles';

const Logo: FC<Props> = ({ img, index }) => (
	<StyledLogo src={img} alt={img} index={index} />
);

export default Logo;
