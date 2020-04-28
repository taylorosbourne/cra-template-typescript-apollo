import React, { FC } from 'react';

import { Props } from './logo-types';
import { StyledLogo } from './logo-styles';

const Logo: FC<Props> = ({ img }) => (
  <StyledLogo src={img} alt={img} />
);

export default Logo;
