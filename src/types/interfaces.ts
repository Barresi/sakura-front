import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: "light" | "dark";
  error?: boolean;
}

export interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  theme?: "light" | "dark";
  error?: boolean;
}
