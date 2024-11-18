import styled from 'styled-components';
import backgorundImg from '../../assets/background.png';

export const Container = styled.div`
	display: flex;
	height: 100vh;
	align-items: stretch;
`;

export const Form = styled.form`
	padding: 0 13.6rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	> h1 {
		font-size: 4.8rem;
		color: ${({ theme }) => theme.COLORS.ORANGE};
	}

	> h2 {
		font-size: 2.4rem;
		margin-top: 8.4rem;
		margin-bottom: 2.4rem;
	}

	> p {
		font-size: 1.4rem;
		color: ${({ theme }) => theme.COLORS.GRAY_100};
	}

	> a {
		color: ${({ theme }) => theme.COLORS.ORANGE};
		margin-top: 12.4rem;
	}
`;

export const Background = styled.div`
	flex: 1;
	background: url(${backgorundImg}) no-repeat center center;
	background-size: cover;
`;
