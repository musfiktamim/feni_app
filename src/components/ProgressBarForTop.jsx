import React from 'react'
import { View } from 'react-native'
import { MD3Colors, ProgressBar } from 'react-native-paper'

function ProgressBarForTop({isLoad=false}) {
  return (
    <>
        <ProgressBar indeterminate={isLoad} color={MD3Colors.error50}/>
    </>
  )
}

export default ProgressBarForTop
