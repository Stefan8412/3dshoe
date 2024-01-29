
import { createContext, useContext, useState } from "react";

const shoeColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },

  {
    color: "#ffa500",
    name: "orange",
  },
];

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [shoeColor, setShoeColor] = useState(shoeColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        shoeColors,
        shoeColor,
        setShoeColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
