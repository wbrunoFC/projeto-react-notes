import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	> header {
		width: 100%;
		height: 14.4rem;
		background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
		display: flex;
		align-items: center;
		padding: 0 12.4rem;

		svg {
			color: ${({ theme }) => theme.COLORS.GRAY_100};
			font-size: 2.4rem;
		}
	}
`;

export const Form = styled.form`
	width: 100%;
	max-width: 34rem;
	margin: 0 auto;

	> div:nth-child(4) {
		margin-top: 2.4rem;
	}
`;

export const Avatar = styled.div`
	position: relative;
	margin: -9rem auto 3.2rem;
	width: 18.6rem;
	height: 18.6rem;

	> img {
		border-radius: 50%;
		width: 18.6rem;
		height: 18.6rem;
	}

	> label {
		width: 4.8rem;
		height: 4.8rem;
		background-color: ${({ theme }) => theme.COLORS.ORANGE};
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 0.7rem;
		right: 0.7rem;
		cursor: pointer;

		input {
			display: none;
		}

		svg {
			width: 2rem;
			height: 2rem;
			color: ${({ theme }) => theme.COLORS.WHITE};
		}
	}
`;
