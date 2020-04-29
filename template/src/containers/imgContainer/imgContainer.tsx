import React, { FC } from 'react';

import { Props } from './imgContainer-types';
import { Container } from './imgContainer-styles';
import { Logo } from '../../components';

const ImgContainer: FC<Props> = ({ imgs }) => (
	<Container>
		{imgs &&
			imgs.map((img, i) => (
				<>
					<Logo key={i} index={i} img={img} />{' '}
					{i === imgs.length - 1 ? '' : '+'}{' '}
				</>
			))}
	</Container>
);

export default ImgContainer;
