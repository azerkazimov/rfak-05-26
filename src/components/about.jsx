
import Count from "./count";

export default function About() {
  // ==============================
  // console.log('1: Sinxron kod');  // sync code

  // setTimeout(() => {
  //   console.log('3: Asinxron kod');  // macro task
  // }, 0);

  // Promise.resolve().then(() => {
  //   console.log('2: Asinxron kod');  // micro task
  // });

  // console.log('4: Sinxron kod');  // sync code



  


  return (
    <div style={{ padding: "20px" }}>
      <h1>About</h1>
      
      <Count />
    </div>
  );
}
