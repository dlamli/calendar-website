import { cn, TButton } from "@/libs";

/**
 * A link that looks like a button. Accepts a link and a className, and
 * renders an <a> element with the classnames merged together.
 *
 * @param {string} link - The link to go to on click.
 * @param {string} className - The class name to add to the component.
 * @param {React.ReactNode} children - The children to render inside the button.
 */
export const Button = ({ link, className, children }: TButton) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        className={cn(
          `text-white  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center`,
          className
        )}
      >
        {children}
      </a>
    </>
  );
};
