import { type ButtonHTMLAttributes, type DetailedHTMLProps } from "react";

type ButtonProps = {
  className?: string;
  long?: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function PriBtn({
  className = "",
  long = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-md bg-blue-500  font-semibold text-white ${className} ${
        long ? "h-8 text-start" : "px-4 py-2"
      }`}
      {...props}
    ></button>
  );
}
