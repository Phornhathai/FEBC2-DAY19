import Heading from "./components/heading.tsx"
import Section from "./components/Section.tsx"
import Counter from "./components/Counter.tsx"
import List from "./components/List.tsx"
import { useState } from "react";


function App() {
  //ประกาศตัวแปร และค่าเริ่มต้นที่ใช้ useState เก็บค่าประเภท number return กลับไป
  const [count, setCount] = useState<number>(1);
  return (<>
    <List items ={["🌟 Star "," 🍴 fork ","🔥 Fire"]} render={(item) => <b>{item}</b>}></List>
    <Heading title="Hello it's me"></Heading>
    {/* title = prop , Hello world = child node */}
    <Section title="Aum">
      Hello world
      Bye Bye world
    </Section>
    <Counter setCount={setCount}>Counter = {count}</Counter>
    
  </>);
}
export default App

