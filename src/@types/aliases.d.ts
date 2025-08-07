declare module "@/components/ui/button" {
  import { FC } from "react";
  export const Button: FC<any>;
  export default Button;
}

declare module "@/lib/utils" {
  export function cn(...inputs: any[]): string;
}
