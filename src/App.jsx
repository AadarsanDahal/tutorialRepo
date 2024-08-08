import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Food from "./food.jsx";
import Card from "./card.jsx";
import Button from "./button.jsx";
import Student from "./Student.jsx";

function App() {
  return(

    <>
<Header/>
<Food/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<br />
<Button/>
<Footer/>
<Student name="arsan dahal" age={12} isStudent={true}/>
<Student name="sponge bob" age="19" isStudent={false}/>

</>
  );
}

export default App
