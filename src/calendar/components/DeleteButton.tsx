import { TrashIcon } from "@/global";
import { useCalendarStore, useUiStore } from "@/hooks";
import { cn, TButton } from "@/libs";

export const DeleteButton = ({ className }: TButton) => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();
  const { isModalClose } = useUiStore();

  const onClickDelete = () => startDeletingEvent();

  return (
    <>
      <button
        onClick={onClickDelete}
        aria-label="btn-delete"
        className={cn(
          `text-white  fixed bottom-6 left-6 rounded-full text-3xl size-16 content-center bg-red-600 hover:bg-red-700 focus:ring-red-800 focus:ring-4 focus:outline-none font-medium px-4 py-2 text-center`,
          className
        )}
        style={{
          display: hasEventSelected && isModalClose ? "" : "none",
        }}
      >
        <TrashIcon currentColor="white" className="size-8 m-auto" />
      </button>
    </>
  );
};
