import Ui from "./ui";
import { PRODUCTO } from "../lib/producto";

export default function Page() {
  // solo datos serializables al cliente: el prompt y el schema NUNCA se mandan
  const safe = {
    id: PRODUCTO.id,
    nombre: PRODUCTO.nombre,
    tagline: PRODUCTO.tagline,
    subtitulo: PRODUCTO.subtitulo,
    inputLabel: PRODUCTO.inputLabel,
    inputAlt: PRODUCTO.inputAlt,
    altPlaceholder: PRODUCTO.altPlaceholder,
    precio: PRODUCTO.precio,
    privacidad: PRODUCTO.privacidad,
    mpLink: PRODUCTO.mpLink || null,
    categoria: PRODUCTO.categoria,
  };
  return <Ui p={safe} />;
}
