import { FC } from "react";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const items = [
  { name: "Пицца", id: 1 },
  { name: "Напитки", id: 2 },
];
const categoryActiveId = 1;

export const Categories: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {items.map(({ name, id }, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
          key={index}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
