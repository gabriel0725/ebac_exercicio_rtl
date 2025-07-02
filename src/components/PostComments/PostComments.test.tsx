import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test('Deve adicionar 2 comentarios', () => {
        render(<PostComment />);
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: { value: 'Muito bonito!' }
        });
        
        fireEvent.click(screen.getByTestId('btn-comentar'));

        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: { value: 'Parabéns pelo post!' }
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));

        expect(screen.getByText('Muito bonito!')).toBeInTheDocument();
        expect(screen.getByText('Parabéns pelo post!')).toBeInTheDocument();
    })
});