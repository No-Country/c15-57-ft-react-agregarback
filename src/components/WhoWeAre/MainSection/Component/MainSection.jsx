import MainSectionContainer from '../Presentation/MainSection'

function MainSection ({ MainTitle, MainDescription, MainQuote, MainQuoteAuthor, Monkey }) {
  return (
    <MainSectionContainer
      MainTitle={MainTitle}
      MainDescription={MainDescription}
      MainQuote={MainQuote}
      MainQuoteAuthor={MainQuoteAuthor}
      Monkey={Monkey}
    />
  )
}

export default MainSection
