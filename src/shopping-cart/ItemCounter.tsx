import { useState, type CSSProperties } from "react";

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState<number>(quantity);
  /**
   * La funcion handleClick debe recibir un
   * producto de tipo Pops y debe imprimir en consola el ç
   * nombre del producto y su cantidad.
   */

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  //   const handleClick = ({ name: nombre, quantity: cantidad }: Props) => {
  //     console.log(`Existen ${cantidad} consolas ${nombre}`);
  //   };

  //   const handleMouseEnter = () => {
  //     console.log("PASE POR AQUI");
  //   };
  return (
    <section
      style={{
        display: "flex",
        gap: 30,
        alignItems: "center",
      }}
    >
      <span style={{ width: 200 }}>{name}</span>
      <button onClick={handleDecrement}>-</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 0,
        }}
      >
        <span>{count}</span>
        <span>quantity</span>
      </div>

      <button onClick={handleIncrement}>+</button>
    </section>
  );
};
