import React from 'react';
import classNames from 'classnames';

type ButtonType = 'primary' | 'success' | 'danger';

interface Props {
    children: React.ReactNode | string | string[];
    type: ButtonType;
    style?: React.CSSProperties;
    className?: string;
}

const Button: React.FC<Props> = ({ children, type, style, className }) => {
    let classObject: Record<string, boolean> = {
        rounded: true,
        'px-2': true,
        'py-2': true,
        'bg-red-700': true,
        'text-white': true,
        'hover:bg-violet-600': true,
    }
  

    if(className) {
        classObject[className] = true;
    }

    const classes = classNames(classObject);
  return (
    <button className={classes} style={style}>
      {children}
    </button>
  )
}

export default Button