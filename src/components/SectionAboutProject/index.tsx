import React from 'react'
import { AboutProjectProps } from 'types/api'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'

const SectionAboutProject = ({
  description,
  title,
  image
}: AboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image src={image.url} alt={image.alternativeText} loading="lazy" />
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
