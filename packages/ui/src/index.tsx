import type { PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{
  intent?: "primary" | "secondary";
}>;

const baseStyle = "px-4 py-2 rounded font-semibold transition-colors";

const intentStyles: Record<NonNullable<ButtonProps["intent"]>, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300"
};

export function Button({ intent = "primary", children }: ButtonProps) {
  return <button className={`${baseStyle} ${intentStyles[intent]}`}>{children}</button>;
}

export default Button;
