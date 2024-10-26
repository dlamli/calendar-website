import { FormEvent, useMemo, useState } from "react";
import Swal from "sweetalert2";

import { TDate, TDateProperty, TFormValue, TonInputChange } from "@/libs";
import { differenceInSeconds } from "date-fns";

export const useForm = (initFormValues: TFormValue) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [formSubmitted, setformSubmitted] = useState(false);
  const [formValues, setFormValues] = useState(initFormValues);

  const titleClass = useMemo(() => {
    if (!formSubmitted) return "";

    return formValues.title.length > 0 ? "" : "!border-red-500";
  }, [formValues.title, formSubmitted]);

  const onCloseModal = () => setIsModalOpen(false);
  const onInputChange = ({ target }: TonInputChange) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChange = (event: TDate, changing: TDateProperty) => {
    setFormValues({ ...formValues, [changing]: event });
    // console.log({ event, changing });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setformSubmitted(true);

    const difference = differenceInSeconds(formValues.end, formValues.start);

    if (isNaN(difference) || difference <= 0) {
      Swal.fire("Date incorrect", "Please check valid date", "error");
      return;
    }

    if (formValues.title.length <= 0) return;

    console.log(formValues);
  };

  return {
    formSubmitted,
    formValues,
    isModalOpen,
    titleClass,
    onCloseModal,
    onDateChange,
    onInputChange,
    onSubmit,
  };
};
