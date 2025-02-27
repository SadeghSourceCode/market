import { ButtonType } from "../../types/application-component-types";
import { IIconModel } from "../icon.interface";


export interface IButton {
    id: string;
    label?: string;
    icon?: IIconModel;
    isLoading?: boolean;
    isVisible?: boolean;
    isDisabled?: boolean;
    type?: ButtonType;

    action?: () => void;
}

