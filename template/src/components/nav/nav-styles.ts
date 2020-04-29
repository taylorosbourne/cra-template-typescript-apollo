import styled from 'styled-components';

const StyledNav = styled.nav`
	width: 100vw;
	height: 60px;
	margin: 0;
	padding: 0;
	position: absolute;
	top: 0;
	left: 0;
	ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 200px;
		li {
			font-size: 1.25rem;
			font-family: Arial, Helvetica, sans-serif;
			color: #0d02a2;
			list-style: none;
			a {
				text-decoration: none;
				color: inherit;
				:hover {
					text-decoration: underline #f35ac2 dotted;
				}
			}
		}
	}
`;

export { StyledNav };
