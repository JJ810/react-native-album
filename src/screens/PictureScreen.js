import React from 'react'
import { Dimensions, Image, StyleSheet, Text } from 'react-native'
import Container from '../components/Container'

const PictureScreen = ({ route }) => {
  const { title, url } = route.params

  return (
    <Container>
      {title && url && (
        <>
          <Image
            source={{ uri: url }}
            style={{
              width: Dimensions.get('screen').width,
              height: Dimensions.get('screen').width,
            }}
          />
          <Text style={styles.title}>{title}</Text>
        </>
      )}
    </Container>
  )
}
export default PictureScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
  },
})
