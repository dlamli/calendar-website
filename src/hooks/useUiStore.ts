import { useDispatch, useSelector } from "react-redux";

import { TUiStore } from "@/libs";
import { onCloseDateModal, onOpenDateModal } from "@/store";

export const useUiStore = () => {
  const { isDateModalOpen } = useSelector((state: TUiStore) => state.ui);
  const dispatch = useDispatch();

  const openDateModal = () => dispatch(onOpenDateModal());

  const closeDateModal = () => dispatch(onCloseDateModal());

  const toggleDateModal = () =>
    isDateModalOpen ? closeDateModal() : openDateModal();

  return {
    // Properties
    isDateModalOpen,
    isModalClose: !!closeDateModal,
    // Methods
    closeDateModal,
    openDateModal,
    toggleDateModal,
  };
};
