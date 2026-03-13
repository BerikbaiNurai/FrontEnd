import { memo } from "react";

interface Props {
    onClick: () => void;
    label: string;
}

export const Button = memo(function Button({ onClick, label }: Props) {
    console.log(`Button "${label}" render`);

    return (
        <button onClick = {onClick}>
            {label}
        </button>
    );
});