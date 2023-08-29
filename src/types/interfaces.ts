import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

type TTheme = "light" | "dark";
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: TTheme;
  error?: boolean;
}

export interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  theme?: TTheme;
  error?: boolean;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  theme?: TTheme;
  variant?: "primary" | "secondary" | "link";
  arrow?: boolean;
  customArrow?: string;
}
