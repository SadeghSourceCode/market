import { IIconModel } from "./icon.interface";
import { ButtonType } from "../types/application-component-types";

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

