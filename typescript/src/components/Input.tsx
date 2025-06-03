type TextInputProps = {
  value: string;
  handelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Inputo = ({ value, handelChange }: TextInputProps) => {
  const handelInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <input
      type=" text"
      value={value}
      onChange={handelChange}
      placeholder="Enter your text"
    />
  );
};
export default Inputo;
