import { useState } from "react";
import Contact from "../Presentation/Contact";

export default function ContactContainer() {
 
  const [text, setText] = useState('hello from contact')

return <Contact info={text} />

}
