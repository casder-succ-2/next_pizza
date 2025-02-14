import { FC } from "react";

import { Checkbox } from "../ui/checkbox";

export interface FilterChecboxProps {
  text: string;
  value: string;
  checked?: boolean;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
}

export const FilterCheckbox: FC<FilterChecboxProps> = ({
  text,
  value,
  checked,
  endAdornment,
  onCheckedChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={`checkbox-${String(value)}`}
        value={value}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="rounded-[8px] w-6 h-6"
      />

      <label
        htmlFor={`checkbox-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>

      {endAdornment}
    </div>
  );
};
