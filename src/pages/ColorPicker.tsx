import React, { useState } from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Header } from "../components";

const ColorPicker = () => {
  const [color, setColor] = useState<string>("");

  const change = (target: any) => {
    setColor(target.currentValue.hex);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Color Picker" category="App" />

      <div className="text-center">
        <div id="preview" style={{ backgroundColor: color }} />

        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              inline
              modeSwitcher={false}
              showButtons={false}
              change={change}
            />
          </div>

          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              inline
              modeSwitcher={false}
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
