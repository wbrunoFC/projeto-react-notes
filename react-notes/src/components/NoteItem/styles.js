import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	background-color: ${({ theme, isNew }) => (isNew ? 'transparent' : theme.COLORS.BACKGROUND_900)};
	color: ${({ theme }) => theme.COLORS.GRAY_300};
	border: ${({ theme, isNew }) => (isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : 'none')};
	margin-bottom: 0.8rem;
	border-radius: 1rem;
	padding-right: 1.6rem;

	&:hover {
		border: ${({ isNew }) => (isNew ? `1px dashed #00e929` : `1px solid red`)};
	}

	> button {
		border: none;
		background: none;
	}

	.button-delete {
		color: red;
	}

	.button-add {
		color: #00e929;
	}

	> input {
		height: 5.6rem;
		width: 100%;
		padding: 1.2rem;
		color: ${({ theme }) => theme.COLORS.WHITE};
		background: transparent;
		border: none;

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.GRAY_300};
		}
	}
`;
