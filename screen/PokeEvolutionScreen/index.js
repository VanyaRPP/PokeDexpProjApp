import React from 'react'
import { View } from 'react-native'
import { HeartIcon, AttackIcon, DefenseIcon } from '../../assets/images'
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
          <PokeStatsCircle 
          icon =  {<HeartIcon />}
          circleText = 'HP'
          circleNumber= '35'
          />
          </Row>
          <Row>
          <PokeStatsCircle 
          icon =  {<AttackIcon />}
          circleText = 'HUI'
          circleNumber= '135'
          />
          </Row>
        </FirstRow>
        <SecondRow>
        <Row>
          <PokeStatsCircle 
          icon =  {<DefenseIcon />}
          circleText = 'HER'
          circleNumber= '120'
          />
          </Row>
          <Row>
          <PokeStatsCircle 
          icon =  {<HeartIcon />}
          circleText = 'IDI NAH'
          circleNumber= '47'
          />
          </Row>
        </SecondRow>
      </BigView>
    </MainView>
  )
}
