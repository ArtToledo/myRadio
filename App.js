import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Audio } from 'expo-av';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStopCircle } from '@fortawesome/free-regular-svg-icons';

import animationImg from './assets/focus-animation.gif';
import ondasSomImg from './assets/ondasSom.png';

export default function App() {
  const [showPlayer, setShowPlayer] = useState(false);

  async function playRadio(urlStream) {
    setShowPlayer(true)

    const soundObject = new Audio.Sound();

    await soundObject.loadAsync({ uri: urlStream });
    await soundObject.playAsync();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>Escolha sua rádio favorita</Text>
      <Image source={animationImg} style={styles.gif} />

      <View style={styles.dadContainerRadios}>
        <TouchableOpacity onPress={() => {playRadio('https://medias.sgr.globo.com/hls/aBHFM/aBHFM.m3u8') }} style={styles.radioContainer}>
          <View style={styles.itemsRadio}>
            <Text style={styles.frequencia}>102.1</Text>
            <Text style={styles.nome}>BH FM</Text>
            <Image source={ondasSomImg} style={styles.imgOndas} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {playRadio('https://us-b4-p-e-az1-audio.cdn.mdstrm.com/live-audio/5b7dcf9b7f880d076b1ed74d/5ddfc57f4bee0054b9b3f511/icecast.audio') }} style={styles.radioContainer}>
          <View style={styles.itemsRadio}>
            <Text style={styles.frequencia}>91.3</Text>
            <Text style={styles.nome}>Rádio Disney</Text>
            <Image source={ondasSomImg} style={styles.imgOndas} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.dadContainerRadios}>
        <TouchableOpacity onPress={() => {playRadio('https://64-237-45-183.webnow.com.br/mega.aac') }} style={styles.radioContainer}>
          <View style={styles.itemsRadio}>
            <Text style={styles.frequencia}>92.3</Text>
            <Text style={styles.nome}>Mega FM</Text>
            <Image source={ondasSomImg} style={styles.imgOndas} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {playRadio('https://streamingv2.shoutcast.com/89-a-radio-rock-sao-paulo-') }} style={styles.radioContainer}>
          <View style={styles.itemsRadio}>
            <Text style={styles.frequencia}>89.0</Text>
            <Text style={styles.nome}>A Rádio Rock</Text>
            <Image source={ondasSomImg} style={styles.imgOndas} />
          </View>
        </TouchableOpacity>
      </View>

      {showPlayer &&
        <TouchableOpacity onPress={() => { setShowPlayer(false) }}>
          <FontAwesomeIcon icon={faStopCircle} color="#222" size={50} marginTop={30} />
        </TouchableOpacity>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingHorizontal: 20
  },
  gif: {
    paddingHorizontal: 20,
    maxWidth: '80%',
    maxHeight: '30%',
    resizeMode: 'contain'
  },
  dadContainerRadios: {
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  radioContainer: {
    marginHorizontal: 10,
    width: 150,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    overflow: 'hidden'
  },
  itemsRadio: {
    width: '100%',
    height: '100%',
  },
  frequencia: {
    paddingLeft: 10,
    paddingTop: 10,
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold'
  },
  nome: {
    paddingLeft: 10,
    color: '#444'
  },
  imgOndas: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',
  }
});
