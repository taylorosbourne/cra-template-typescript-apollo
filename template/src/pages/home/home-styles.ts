import styled from 'styled-components';

const Blurb = styled.p`
	max-width: 60%;
	margin: 15px auto;
	line-height: 1.5;
	font-size: 1.5rem;
	font-weight: 100;
`;

const EditLine = styled(Blurb)`
	color: #0d02a2;
	span {
		text-decoration: underline;
	}
`;

export { Blurb, EditLine };
