import { TDate, TDateProperty, TFormValue, TonInputChange } from "@/libs";
import { differenceInSeconds } from "date-fns";
import { FormEvent, useState } from "react";
import Swal from "sweetalert2";

export const useForm = (initFormValues: TFormValue) => {
  const [formSubmitted, setformSubmitted] = useState(false);
  const [formValues, setFormValues] = useState(initFormValues);

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
    // Properties
    formSubmitted,
    formValues,
    // Methods
    onInputChange,
    onDateChange,
    onSubmit,
  };
};
