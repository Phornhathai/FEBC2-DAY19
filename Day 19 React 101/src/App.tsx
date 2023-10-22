import Heading from "./components/heading.tsx"
import Section from "./components/Section.tsx"
import Counter from "./components/Counter.tsx"
import { useState } from "react";


function App() {
  //ประกาศตัวแปร และค่าเริ่มต้นที่ใช้ useState เก็บค่าประเภท number return กลับไป
  const [count, setCount] = useState<number>(1);
  return (<>
    <Heading title="Hello it's me"></Heading>
    <Section title="Aum">Hello world</Section>
    <Counter setCount={setCount}>Counter = {count}</Counter>
  </>);
}
export default App

