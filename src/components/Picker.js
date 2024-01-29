import { HexColorPicker } from "react-colorful";

import { useSnapshot } from "valtio";
import state from "../state";

const Picker = () => {
  const snap = useSnapshot(state);
  return (
    <div style={{ display: snap.current ? "inline-block" : "none" }}>
      <HexColorPicker
        className="picker"
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current] = color)}
      />
      <h1>{snap.current}</h1>
    </div>
  );
};
export default Picker;
