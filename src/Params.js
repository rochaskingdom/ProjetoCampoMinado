import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // Proporcao do painel superior na tela
    difficultLevel: 0.1,
    getComlumsAmount() {
        const widht = Dimensions.get('window').width
        return Math.floor(widht / this.blockSize)
    },
    getRowsAmount() {
        const totalHeigh = Dimensions.get('window').height
        const boardHeight = totalHeigh * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params