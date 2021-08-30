import React from 'react'
import { SectionTechProps } from 'types/api'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'

const SectionTech = ({ title, techIcons }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ title, icon: { name, url } }) => (
          <S.Icon key={name}>
            <S.Icons src={url} alt={name} loading="lazy" />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
