import { useCalendarStore, useUiStore } from "@/hooks";
import { cn, TButton } from "@/libs";
import { addHours } from "date-fns";

export const AddButton = ({ className, children }: TButton) => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();
  const onClickNew = () => {
    setActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        id: "123",
        name: "John Doe",
      },
    });
    openDateModal();
  };

  return (
    <>
      <button
        onClick={onClickNew}
        className={cn(
          `fixed bottom-6 rounded-full text-3xl size-16 content-center text-white right-6 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 focus:ring-4 focus:outline-none font-medium px-4 py-2 text-center`,
          className
        )}
      >
        {children}
      </button>
    </>
  );
};
