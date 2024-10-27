import { useDispatch, useSelector } from "react-redux";

import { TUiStore } from "@/libs";
import { onCloseDateModal, onOpenDateModal } from "@/store";

export const useUiStore = () => {
  const { isDateModalOpen } = useSelector((state: TUiStore) => state.ui);
  const dispatch = useDispatch();

  const openDateModal = () => dispatch(onOpenDateModal());

  const closeDateModal = () => dispatch(onCloseDateModal());

  const toggleDateModal = () =>
    isDateModalOpen ? openDateModal() : closeDateModal();

  return {
    // Properties
    isDateModalOpen,
    // Methods
    closeDateModal,
    openDateModal,
    toggleDateModal,
  };
};
