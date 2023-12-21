import { SubtitleInfoStore } from '../../../components'

import MainSection from '../../../components/WhoWeAre/MainSection/Component/MainSection'
import MapSection from '../../../components/WhoWeAre/MapSection/Component/MapSection'
import DownSection from '../../../components/WhoWeAre/DownSection/Component/DownSection'
import { LatamMap, Monkey, Certificate } from '../../../assets/who-we-are/index'

const WhoWeAreInfo = ({ data }) => {
  return (
    <>
      {

        data.map(({
          id,
          MainTitle,
          MainDescription,
          MainQuote,
          MainQuoteAuthor,
          MapSectionTitle,
          MapSectionOperations,
          MapSectionDefenders,
          MapSectionDonations,
          DownSectionTitle,
          DownSectionDescription
        }) => (
          <div key={id}>
            <div className='w-full flex justify-center md:hidden'>
              <SubtitleInfoStore link='/' title='Perfil' />
            </div>

            <MainSection
              MainTitle={MainTitle}
              MainDescription={MainDescription}
              MainQuote={MainQuote}
              MainQuoteAuthor={MainQuoteAuthor}
              Monkey={Monkey}
            />

            <MapSection
              MapSectionTitle={MapSectionTitle}
              MapSectionOperations={MapSectionOperations}
              MapSectionDefenders={MapSectionDefenders}
              MapSectionDonations={MapSectionDonations}
              LatamMap={LatamMap}
            />

            <DownSection
              DownSectionTitle={DownSectionTitle}
              DownSectionDescription={DownSectionDescription}
              Certificate={Certificate}
            />

          </div>
        )
        )
      }
    </>
  )
}

export default WhoWeAreInfo
