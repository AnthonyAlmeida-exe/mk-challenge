import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const formatDate = (dateString?: string) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return format(date, "dd MMM, yyyy", { locale: ptBR });
};
