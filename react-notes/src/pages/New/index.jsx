import { Container, Form } from './styles';
import { Header } from '../../components/Header/index';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section/index';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function New() {
	return (
		<Container>
			<Header />

			<main>
				<Form>
					<header>
						<h1>Criar nota</h1>
						<Link to='/'>Voltar</Link>
					</header>

					<Input placeholder='Título da nota' type='text' />
					<Textarea placeholder='Observações' />

					<Section title='Links úteis'>
						<NoteItem isNew placeholder='Novo Link' />
						<NoteItem />
					</Section>

					<Section title='Marcadores'>
						<div className='tags'>
							<NoteItem isNew placeholder='Nova Tag' />
							<NoteItem />
						</div>
					</Section>

					<Button title='Salvar' />
				</Form>
			</main>
		</Container>
	);
}
