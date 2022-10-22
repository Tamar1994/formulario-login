import React from "react";

export interface IButtonProps {
    title: string;
    handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
}