import React from 'react'
import { View } from 'react-native'
import { HeartIcon, AttackIcon, DefenseIcon } from '../../assets/images'
import PokeEvolutionView from '../../components/PokeEvolutionView'
import PokeHeader from '../../components/PokeHeader'
import PokeStatsCircle from '../../components/PokeStatsCircle'
import { CircleView } from '../../components/PokeStatsCircle/style'
import { MainView, BigView, FirstRow, SecondRow, Row } from './style'

export default function PokeEvolutionScreen() {
  return (
    <MainView>
      <PokeHeader
        title="Evolution"
      />
      <BigView>
        <FirstRow>
          <Row>
            <PokeEvolutionView />
          </Row>
          <Row>
            <PokeEvolutionView />
          </Row>
        </FirstRow>
        <SecondRow>
          <Row>
            <PokeEvolutionView />
          </Row>
          <Row>
            <PokeEvolutionView />
          </Row>
        </SecondRow>
      </BigView>
    </MainView>
  )
}
