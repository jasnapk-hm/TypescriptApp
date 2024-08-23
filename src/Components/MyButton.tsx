import React, { useState } from "react";

interface MyButtonProps {
  text: string;
  onClick?: () => void;
}
interface Book {
  name: string;
  price: number;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
  const { text, onClick = () => {} } = props;

//   const [value,setValue]=useState<number>(1)
  const [value, setValue] = useState<Book>({ name: "The power", price: 200 });

  return (
    <div>
      <h1>{value.name}</h1>
      <button
        onClick={() => {
          setValue({ name: "The magic", price: 400 });
        }}
      >
        {text}
      </button>
    </div>
  );
};
export default MyButton;
