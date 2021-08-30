export type Image = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type TechIcon = {
  title: string
  icon: {
    name: string
    url: string
  }
}

export type Module = {
  title: string
  subtitle: string
  description: string
}

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  name: string
  role: string
  description: string
  photo: Image
  socialLinks: SocialLink[]
}

export type HeaderProps = {
  title: string
  description: string
  image: Image
  button: ButtonProps
}

export type AboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: {
    title: string
  }[]
}

export type SectionModulesProps = {
  title: string
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: string
  numberInstallments: string
  priceInstallment: string
  benefits: string
  button: ButtonProps
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  name: string
  text: string
  photo: {
    name: string
    url: string
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  question: string
  answer: string
  isExtraQuestion: boolean
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: Image
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
