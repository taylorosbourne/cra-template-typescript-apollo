import styled from 'styled-components';

const Blurb = styled.p`
	max-width: 60%;
	margin: 15px auto;
	line-height: 1.5;
	font-size: 1.35rem;
	font-weight: 100;
	text-align: left;
	span {
		font-weight: bold;
	}
`;

const Code = styled.pre`
	background: rgba(0,0,0,0.05);
	padding: 12px;
	max-width: 60%;
	border-radius: 5px;
	margin: 0 auto;
	text-align: left;
	code {
		font-size: 1.35rem;
	}
`;

export { Blurb, Code };
