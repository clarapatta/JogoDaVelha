import { View, Text, StyleSheet, Pressable, Modal, ScrollView, ImageBackground, Image } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

// Objeto com a paleta de cores para fácil referência
const colors = {
  pretoGiz: '#1C1C1C',
  cinzaGizClaro: '#DADADA',
  cinzaAzulado: '#2C3E50',
  gizRosaAntigo: '#E26A6A',
  amareloPastel: '#F1C40F',
};

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* --- Modal de Regras (Estilos também atualizados) --- */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Regras do Jogo</Text>
              <ScrollView style={{ width: '100%' }}>
                <Text style={styles.modalSectionTitle}>Objetivo</Text>
                <Text style={styles.modalText}>
                  Seja o primeiro jogador a alinhar três dos seus símbolos ('X' ou 'O') em uma linha reta, seja ela horizontal, vertical ou na diagonal.
                </Text>

                <Text style={styles.modalSectionTitle}>Como Jogar</Text>
                <Text style={styles.modalText}>
                  1. O jogo é disputado entre dois jogadores: 'X' e 'O'. {'\n'}
                  2. O jogador 'X' sempre começa a partida.{'\n'}
                  3. Os jogadores alternam os turnos, tocando em uma casa vazia para colocar seu símbolo.{'\n'}
                  4. Se todas as casas forem preenchidas sem um vencedor, o jogo termina em empate.
                </Text>

                <Text style={styles.modalSectionTitle}>Controles</Text>
                <Text style={styles.modalText}>
                  • <Text style={{ fontWeight: 'bold' }}>Resetar:</Text> Limpa o tabuleiro para iniciar uma nova partida.{'\n'}
                  • <Text style={{ fontWeight: 'bold' }}>Voltar:</Text> Retorna para a tela de início.
                </Text>
              </ScrollView>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.buttonText}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* --- Conteúdo da Tela Principal --- */}
        <Text style={styles.title}>Bem-vindo ao <Text style={styles.highlight}>Nexus XO</Text></Text>
        <Text style={styles.subtitle}>O clássico jogo da velha reinventado!</Text>
        <Image source={require('../../assets/images/icon1.png')} style={styles.logo} />
        <Pressable style={styles.button} onPress={() => router.push("/PInicial")}>
          <Text style={styles.buttonText}>Iniciar Jogo</Text>
        </Pressable>
        <Pressable style={styles.rulesButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.rulesButtonText}>Como Jogar?</Text>
        </Pressable>
        <Text style={styles.footerText}> © 2025 Patta</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pretoGiz, // Cor de fundo base
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(28, 28, 28, 0.5)', // Overlay para escurecer a imagem e melhorar a leitura
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    color: colors.cinzaGizClaro, // Cor principal de texto
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  highlight: {
    color: colors.amareloPastel, // Destaque com Amarelo Pastel
  },
  subtitle: {
    fontSize: 18,
    color: colors.cinzaGizClaro, // Cor secundária de texto
    marginBottom: 40,
    textAlign: 'center',
  },
  footerText: {
    fontSize: 14,
    color: colors.cinzaGizClaro,
    position: 'absolute',
    bottom: 20,
  },
  button: {
    backgroundColor: colors.gizRosaAntigo, // Botão de ação principal
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.cinzaGizClaro, // Texto do botão
    fontSize: 18,
    fontWeight: '600',
  },
  rulesButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  rulesButtonText: {
    color: colors.cinzaGizClaro, // Texto secundário
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  // Estilos do Modal com a nova paleta
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    margin: 20,
    width: '90%',
    maxHeight: '80%',
    backgroundColor: colors.cinzaGizClaro, // Fundo claro para o modal
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: colors.pretoGiz, // Texto escuro no modal claro
  },
  modalSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.cinzaAzulado, // Tom complementar para seções
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  modalText: {
    fontSize: 16,
    color: colors.pretoGiz, // Texto principal do modal
    marginBottom: 15,
    alignSelf: 'flex-start',
    lineHeight: 22,
  },
  buttonClose: {
    backgroundColor: colors.gizRosaAntigo, // Botão consistente
    marginTop: 20,
  },
});