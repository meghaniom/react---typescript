 type GrexProps = {
    name : string;
    age : number
    LoginIn: boolean
 }

const Greetx = (props: GrexProps) => {
  return (
    <div>
        <h2>{
            props.LoginIn? `Hello${props.name} GoodMoring your age is ${props.age}
          `:'Welcome Guest'
            }
            </h2>
           </div>
  )
}

export default Greetx