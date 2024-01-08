

import React from 'react';
import { InputHTMLAttributes } from 'react';
import Image from 'next/image';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    PrefixIcon?: React.ReactNode; // Icon component if using SVGs or font icons
    backIcon?: React.ReactNode;
    className?: string; // Extra Tailwind CSS classNamees
    label?: string;
    inputclassName?: string;
};

const Input: React.FC<InputProps> = ({
    PrefixIcon,
    backIcon,
    className,
    label,
    inputclassName,
    ...inputProps
}) => {
    return (
        <>
            {label && <div className='text-neutral-600 text-sm'>{label}</div>}
            <div className={`self-stretch h-8 p-2 bg-white text-black rounded-lg border border-gray-300 justify-start items-center gap-2 inline-flex`}>
                {PrefixIcon && <span className="w-[18px] h-[18px] relative text-gray-500">{PrefixIcon}</span>}
                <input
                    className={`py-2 pr-4 w-full outline-none h-7 text-sm`}
                    {...inputProps}
                />
                {backIcon && <span className="pr-4">{backIcon}</span>}
            </div>
        </>
    );
};

export default Input;
