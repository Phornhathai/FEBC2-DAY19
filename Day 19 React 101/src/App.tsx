import MyForm from "./components/MyForm.tsx";
import Dashboard from "./components/Dashboard.tsx"
import { useForm } from 'react-hook-form'

// import Dashboard from "./components/dashboard.tsx"
import Login from "./components/Login.tsx"
import { useState } from "react";


function App() {
  //ประกาศตัวแปร และค่าเริ่มต้นที่ใช้ useState เก็บค่าประเภท number return กลับไป
  // const [count, setCount] = useState<number>(1);
  let isLogin : boolean = false;

 
  if(isLogin){
    return <Dashboard/>
  }else{
    return <MyForm/>
  }
  // return (<>
  //   <List items ={["🌟 Star "," 🍴 fork ","🔥 Fire"]} render={(item) => <b>{item}</b>}></List>
  //   <Heading title="Hello it's me"></Heading>
  //   {/* title = prop , Hello world = child node */}
  //   <Section title="Aum">
  //     Hello world
  //     Bye Bye world
  //   </Section>
  //   <Counter setCount={setCount}>Counter = {count}</Counter>
  //   <Dashboard></Dashboard>
  // </>);
}
export default App

