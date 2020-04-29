import styled from 'styled-components';

const StyledLogo = styled.img<{ index: number }>`
	max-height: ${props => (props.index === 0 ? '96px' : '80px')};
	margin: 0 5px;
`;

export { StyledLogo };
