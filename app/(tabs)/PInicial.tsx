import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

// Objeto com a paleta de cores para fácil referência
const colors = {
  pretoGiz: '#1C1C1C',
  cinzaGizClaro: '#DADADA',
  cinzaAzulado: '#2C3E50',
  gizRosaAntigo: '#E26A6A',
  amareloPastel: '#F1C40F',
  verdeGiz: '#27AE60',
};

export default function PInicial() {
    const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
    const [jogadorAtual, setJogadorAtual] = useState('X');
    const [mensagem, setMensagem] = useState('');
    const [corMensagem, setCorMensagem] = useState(colors.cinzaGizClaro);

    // Cores dos jogadores baseadas na paleta
    const corJogadorX = colors.amareloPastel;
    const corJogadorO = colors.verdeGiz;

    const resetarJogo = () => {
        setTabuleiro(Array(9).fill(null));
        setJogadorAtual('X');
        setMensagem('');
        setCorMensagem(colors.cinzaGizClaro);
    };

    const verificarVencedor = (tabuleiroAtual) => {
        const combinacoesVitoria = [
            [0, 1, 2],[3, 4, 5],[6, 7, 8],
            [0, 3, 6],[1, 4, 7],[2, 5, 8],
            [0, 4, 8],[2, 4, 6],
        ];

        for (let i = 0; i < combinacoesVitoria.length; i++) {
            const [a, b, c] = combinacoesVitoria[i];
            if (tabuleiroAtual[a] && tabuleiroAtual[a] === tabuleiroAtual[b] && tabuleiroAtual[a] === tabuleiroAtual[c]) {
                return tabuleiroAtual[a];
            }
        }
        return null;
    };

    const trocarBotao = (indice) => {
        if (tabuleiro[indice] !== null || mensagem !== '') {
            return;
        }

        const novoTabuleiro = [...tabuleiro];
        novoTabuleiro[indice] = jogadorAtual;
        setTabuleiro(novoTabuleiro);

        const vencedor = verificarVencedor(novoTabuleiro);
        if (vencedor) {
            setMensagem(`Jogador ${vencedor} venceu!`);
            setCorMensagem(vencedor === 'X' ? corJogadorX : corJogadorO);
            return;
        }

        if (novoTabuleiro.every(celula => celula !== null)) {
            setMensagem('Empate!');
            setCorMensagem(colors.cinzaGizClaro);
            return;
        }

        setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X');
    };

    const renderizarCelula = (indice) => (
        <TouchableOpacity style={styles.botao} onPress={() => trocarBotao(indice)}>
            <Text style={[styles.texto, { color: tabuleiro[indice] === 'X' ? corJogadorX : corJogadorO }]}>
                {tabuleiro[indice]}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Jogo da Velha</Text>

            <View style={styles.tabuleiro}>
                <View style={styles.linha}>
                    {renderizarCelula(0)}
                    {renderizarCelula(1)}
                    {renderizarCelula(2)}
                </View>
                <View style={styles.linha}>
                    {renderizarCelula(3)}
                    {renderizarCelula(4)}
                    {renderizarCelula(5)}
                </View>
                <View style={styles.linha}>
                    {renderizarCelula(6)}
                    {renderizarCelula(7)}
                    {renderizarCelula(8)}
                </View>
            </View>
            
            {mensagem ? (
                <Text style={[styles.mensagem, { color: corMensagem }]}>
                    {mensagem}
                </Text>
            ) : null}

            <TouchableOpacity style={styles.button} onPress={resetarJogo}>
                <Text style={styles.buttonText}>Resetar</Text>
            </TouchableOpacity>

            <Pressable style={styles.secondaryButton} onPress={() => router.back()}>
                <Text style={styles.secondaryButtonText}>Voltar para o Início</Text>
            </Pressable>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.pretoGiz, // Fundo principal da tela
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 32,
        color: colors.cinzaGizClaro, // Título com cor de giz
        fontWeight: 'bold',
        marginBottom: 30,
    },
    tabuleiro: {
        borderWidth: 3,
        borderColor: colors.cinzaGizClaro, // Bordas do tabuleiro como linhas de giz
        borderRadius: 5,
    },
    linha: {
        flexDirection: 'row',
    },
    botao: {
        width: 80, // Reduzido de 100 para 80
        height: 80, // Reduzido de 100 para 80
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.cinzaAzulado, // Linhas internas do tabuleiro
    },
    texto: {
        fontSize: 38, // Reduzido de 48 para 38 para se ajustar melhor
        fontWeight: 'bold',
    },
    mensagem: {
        fontSize: 24,
        marginVertical: 20,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: colors.gizRosaAntigo, // Botão de ação primário
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 8,
        marginTop: 30,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.cinzaGizClaro,
        fontSize: 18,
        fontWeight: '600',
    },
    secondaryButton: {
        marginTop: 15,
    },
    secondaryButtonText: {
        color: colors.cinzaGizClaro,
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});