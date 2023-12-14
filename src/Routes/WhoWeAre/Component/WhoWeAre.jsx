import { useState } from 'react'
import WhoWeAre from '../Presentation/WhoWeAre'

export default function WhoWeAreContainer () {
  const [text, setText] = useState('hello from contact')

  return <WhoWeAre info={text} />
}
