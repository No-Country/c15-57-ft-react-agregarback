import React from 'react'

import MainSectionLayout from './MainSectionLayout'
import MainSectionElements from './MainSectionElements'

function MainSectionContainer({ MainTitle, MainDescription, MainQuote, MainQuoteAuthor, Monkey }) {
    return (
        <MainSectionLayout>
            <MainSectionElements
                    MainTitle={MainTitle}
                    MainDescription={MainDescription}
                    MainQuote={MainQuote}
                    MainQuoteAuthor={MainQuoteAuthor}
                    Monkey={Monkey}
            />
        </MainSectionLayout>
    )
}

export default MainSectionContainer