import React from 'react'
import { SectionFaqProps } from 'types/api'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'

const SectionFaq = ({ title, questions }: SectionFaqProps) => {
  const extraQuestions = questions.filter((q) => q.isExtraQuestion)
  const normalQuestions = questions.filter((q) => !q.isExtraQuestion)

  return (
    <S.Wrapper>
      <S.Content>
        <Container>
          <Heading>{title}</Heading>

          <S.Questions>
            {normalQuestions.map(({ question, answer }, index) => (
              <S.Question key={index}>
                <Heading lineBottom>{question}</Heading>
                <div dangerouslySetInnerHTML={{ __html: answer }} />
              </S.Question>
            ))}
          </S.Questions>

          {extraQuestions.map((eq) => (
            <S.ExtraQuestion key={eq.question}>
              <Heading lineBottom>{eq.question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: eq.answer }} />
            </S.ExtraQuestion>
          ))}
        </Container>
      </S.Content>
    </S.Wrapper>
  )
}

export default SectionFaq
