export type LogoProps = {
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

export type HeaderProps = {
  title: string
  description: string
  image: LogoProps
  button: ButtonProps
}

export type AboutProjectProps = {
  title: string
  description: string
  image: LogoProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
  sectionTech: SectionTechProps
}
