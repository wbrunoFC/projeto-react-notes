import { Container } from './styles';
import { FiPlus, FiX } from 'react-icons/fi';

// eslint-disable-next-line react/prop-types
export function NoteItem({ isNew, value, onClick, ...rest }) {
	return (
		<Container isNew={isNew}>
			<input type='text' value={value} readOnly={!isNew} {...rest} />
			<button type='button' onClick={onClick} className={isNew ? 'button-add' : 'button-delete'}>
				{isNew ? <FiPlus /> : <FiX />}
			</button>
		</Container>
	);
}
