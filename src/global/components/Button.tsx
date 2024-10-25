import { cn, TButton } from "@/libs";

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
