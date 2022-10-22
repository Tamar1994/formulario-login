import { Control } from "react-hook-form";
import { IFormLogin } from "../../Pages/Login/types"

export interface IinputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: "email" | "senha";
    control: Control<IFormLogin, any>;
    errorMessage?: string
}
