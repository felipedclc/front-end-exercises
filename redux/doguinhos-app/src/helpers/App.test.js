import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';

describe('Página pricncipal', () => {
    test('Testa que o botão de add o dog está presente', async () => {
        const { queryByText, store } = render(<App />);
        const buttonDoguinho = queryByText('Novo Doguinho');

        expect(buttonDoguinho).toBeInTheDocument();
    });
});