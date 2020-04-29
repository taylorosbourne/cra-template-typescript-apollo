import styled from 'styled-components';

const Blurb = styled.p`
	max-width: 60%;
	margin: 15px auto;
	line-height: 1.5;
	font-size: 1.5rem;
	font-weight: 100;
`;

const AnchorLink = styled.a`
	color: #0d02a2;
	text-decoration: none;
	:hover {
		text-decoration: underline #f35ac2 dotted;
	}
`;

export { Blurb, AnchorLink };
