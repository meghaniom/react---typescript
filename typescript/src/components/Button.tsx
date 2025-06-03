type ButtonProps = {
  handelClick: (event: React.MouseEvent<HTMLButtonElement>, id : number) => void;
};
const Button = (props:ButtonProps) => {
   return (
  <div>
    <button onClick={ (event) =>props.handelClick(event, 1)}>Click</button>
  </div>
   )
}
 export default Button;