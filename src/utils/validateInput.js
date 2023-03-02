import { toast } from "react-toastify";

export const validateCustomMode = (timer, word) => {
  if (word.length === 0) return "Guess Word input cannot be empty.";

  if (word.length < 3) return "Guess Word should atleast 3 characters long";

  if (timer === 0) return "Timer Input Cannot Be Empty";

  if (timer < 20) return "Timer Should Be Atleast 20 Seconds";
};
