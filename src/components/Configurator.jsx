/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/scene.gltf 
Author: Freepoly.org (https://sketchfab.com/blackrray)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/scan-shoe-07-freepolyorg-a6ce31bda65640afb1b6e94c775756b6
Title: Scan Shoe 07-Freepoly.org
*/

import { useCustomization } from "@/context/Customization";
import Picker from "./Picker";
import { lusitana } from "@/app/ui/fonts";
const Configurator = () => {
  const { shoeColors, shoeColor, setShoeColor } = useCustomization();
  return (
    <div className="absolute flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="p-3">
        <div className="flex items-center justify-between mb-1">
          <h5 className={`${lusitana.className}`}>Lences color</h5>
        </div>
        <p className={`${lusitana.className}`}>
          you can choose lences color by clicking on color
        </p>

        {shoeColors.map((item, index) => (
          <div
            key={index}
            className={`inline-flex flex-wrap items-center gap-2 mt-4 group   ${
              item.color === shoeColor.color ? "item--active" : ""
            }`}
            onClick={() => setShoeColor(item)}
          >
            <div
              className="w-8 h-8 rounded-full "
              style={{ backgroundColor: item.color }}
            />
            <div className="text-sm text-center capitalize hover:uppercase px-1.5 ">
              {item.name}
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between mb-3">
          <h5 className={`${lusitana.className} `}>
            Other parts color-choose shoe part
          </h5>
        </div>
        <Picker />
      </div>
    </div>
  );
};

export default Configurator;
