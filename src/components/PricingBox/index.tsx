import React from 'react'
import { PricingBoxProps } from 'types/api'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  benefits,
  button,
  numberInstallments,
  priceInstallment,
  totalPrice
}: PricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R$549</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{numberInstallments}x de</span> {priceInstallment}
      </S.DiscountPrice>
    </S.Prices>

    <S.BenefitsContainer dangerouslySetInnerHTML={{ __html: benefits }} />

    <Button href={button.url} onClick={onClick} withPrice>
      <p>{button.label}</p>
      <div>
        <S.ButtonFullPrice>R$549</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>{totalPrice}</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
