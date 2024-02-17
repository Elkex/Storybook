import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  /**
   * How large should the button be?
   */
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'bg-primary border-primary hover:text-primary' : 'bg-secondary border-secondary hover:text-secondary';
  return (
    <button
      type="button"
      className={['px-8 py-4 font-bold border-2 rounded-full text-white hover:bg-white transition', mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
