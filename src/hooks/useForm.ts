import { FormEvent, useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

import Swal from "sweetalert2";

import { TDate, TDateProperty, TOnInputChange } from "@/libs";
import { useCalendarStore, useUiStore } from "@/hooks";

// !!TODO: TYPE ERROR
export const useForm = (initFormValues) => {
  const [formSubmitted, setformSubmitted] = useState(false);
  const [formValues, setFormValues] = useState(initFormValues);
  const { activeEvent, startSavingEvent } = useCalendarStore();
  const { closeDateModal } = useUiStore();

  useEffect(() => {
    if (activeEvent) {
      setFormValues(activeEvent);
    }
  }, [activeEvent]);

  const onInputChange = ({ target }: TOnInputChange) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChange = (event: TDate, changing: TDateProperty) => {
    setFormValues({ ...formValues, [changing]: event });
    // console.log({ event, changing });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setformSubmitted(true);

    const difference = differenceInSeconds(formValues.end, formValues.start);

    if (isNaN(difference) || difference <= 0) {
      Swal.fire("Date incorrect", "Please check valid date", "error");
      return;
    }

    if (formValues.title.length <= 0) return;

    console.log(formValues);

    await startSavingEvent(formValues);
    closeDateModal();
    setformSubmitted(false);
  };

  return {
    // Properties
    formSubmitted,
    formValues,
    // Methods
    onInputChange,
    onDateChange,
    onSubmit,
  };
};
