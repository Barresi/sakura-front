import { HTMLInputTypeAttribute, CSSProperties } from "react";

export interface IInputProps {
  theme?: "light" | "dark";
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  name?: string;
  id?: string;
  style?: CSSProperties;
  size?: "sm" | "base" | "lg";
  className?: string;
  error?: boolean;
}

export interface ITextareaProps extends Omit<IInputProps, "type"> {}
