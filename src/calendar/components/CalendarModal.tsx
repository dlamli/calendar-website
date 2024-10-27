import { useMemo } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import { addHours } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import "sweetalert2/dist/sweetalert2.min.css";

import { SaveIcon } from "@/global";
import { useCalendar, useForm, useUiStore } from "@/hooks";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const initFormValues = {
  title: "Test",
  notes: "Test Notes",
  start: new Date(),
  end: addHours(new Date(), 2),
};

export const CalendarModal = () => {
  const { formValues, formSubmitted, onSubmit, onInputChange, onDateChange } =
    useForm(initFormValues);
  const { isDateModalOpen, closeDateModal } = useUiStore();
  const { customStyles } = useCalendar();

  const titleClass = useMemo(() => {
    if (!formSubmitted) return "";

    return formValues.title.length > 0 ? "" : "!border-red-500";
  }, [formValues.title, formSubmitted]);

  const onCloseModal = () => closeDateModal();

  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      overlayClassName="modal-bg"
      className="modal"
      closeTimeoutMS={200}
    >
      <h1 className="text-2xl text-bold mb-2"> New Event </h1>
      <hr />
      <form className="container mt-2" onSubmit={onSubmit}>
        <div className="mb-2">
          <label className="block">Start Date</label>
          <DatePicker
            dateFormat="Pp"
            className="block border-2 border-slate-500 focus:border-slate-700 focus:ring-slate-700 rounded-lg w-full px-2 py-1"
            selected={formValues.start}
            showTimeSelect
            onChange={(event) => onDateChange(event, "start")}
          />
        </div>

        <div className="mb-2">
          <label className="block">End Date</label>
          <DatePicker
            dateFormat="Pp"
            minDate={formValues.start}
            className="block border-2 border-slate-500 focus:border-slate-700 focus:ring-slate-700 rounded-lg w-full px-2 py-1"
            selected={formValues.end}
            showTimeSelect
            onChange={(event) => onDateChange(event, "end")}
          />
        </div>

        <hr />
        <div className=" mb-2">
          <label>Title and notes</label>
          <input
            type="text"
            className={`block border-2 border-slate-500 focus:border-slate-700 focus:ring-slate-700 rounded-lg w-full px-2 py-1 ${titleClass}`}
            placeholder="Event title..."
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChange}
          />
          <small id="emailHelp">Minimal description</small>
        </div>
        <div className=" mb-2">
          <textarea
            className="block w-full border-2 border-slate-500 focus:border-slate-700 focus:ring-slate-700 rounded-lg px-2 py-1"
            placeholder="Aditional notes..."
            rows={5}
            name="notes"
            value={formValues.notes}
            onChange={onInputChange}
          ></textarea>
        </div>

        <button
          className="flex items-center gap-2 text-blue-600 hover:text-white border-2 border-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm p-4 py-2 pl-1 text-center"
          type="submit"
        >
          <SaveIcon currentColor="currentColor" className="size-5 block" />
          <span className="block">Save</span>
        </button>
      </form>
    </Modal>
  );
};
