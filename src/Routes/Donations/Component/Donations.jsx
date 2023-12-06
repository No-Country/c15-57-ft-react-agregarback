import { useState } from "react";
import Contact from "../Presentation/Donations";

export default function DonationsContainer() {
 
  const [text, setText] = useState('hello from contact')

return <Contact info={text} />

}
