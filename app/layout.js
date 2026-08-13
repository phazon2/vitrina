import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { PRODUCTO } from "../lib/producto";

export const metadata = {
  title: `${PRODUCTO.nombre} — ${PRODUCTO.tagline}`,
  description: PRODUCTO.subtitulo,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
