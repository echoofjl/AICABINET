import React, { useMemo } from "react";

interface TextInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    value?: string;
    placeholder?: string;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, placeholder, className, onChange, rows = 4, ...props }) => {
    const baseStyle = "w-full min-h-32 p-4 border rounded-md focus:outline-none focus:ring focus:border-blue-600 mb-4";
    const combinedClassName = useMemo(
        () => [
            baseStyle,
            className
        ].filter(Boolean).join(" "),
        [className]
    );

    return (
        <textarea
            className={combinedClassName}
            placeholder={placeholder}
            value={value}
            defaultValue={!value ? props.defaultValue : undefined} // Use defaultValue only if value is not provided
            onChange={onChange}
            {...props}
        ></textarea>
    );
}

export default TextInput;