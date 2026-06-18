# Revisión de ubicación de imágenes

Fecha de revisión: 2026-06-18

Este documento resume la decisión de uso de imágenes después del inventario visual. El criterio aplicado fue separar imágenes de producto/servicio, que sí deben aparecer en carruseles técnicos, de imágenes panorámicas o contextuales, que funcionan mejor como ambientación visual de secciones.

## Criterio de diseño aplicado

- Los carruseles de productos deben mostrar piezas, carcasas, elementos o equipos relacionados directamente con el texto de cada tarjeta.
- Las imágenes panorámicas de refinerías, plantas, minería o energía no se usan como evidencia directa de un servicio; se reservan para ambientación de marca o contexto industrial.
- La imagen `Picture50.png` de `Panoramicas` muestra una rana verde. No se usa en carruseles técnicos; se reserva para un cierre ambiental tratado con overlay, difuminado y baja opacidad.
- Las imágenes de minería, fundición y plantas industriales no usadas quedan disponibles para futuras secciones de sectores atendidos.

## Carruseles de productos

| Apartado | Imágenes usadas | Evaluación |
| --- | --- | --- |
| Elementos filtrantes nominales y absolutos | `Picture22.png`, `Picture23.png`, `Picture24.png`, `Picture25.png` de `Elementos Filtrantes` | Correctas. Muestran cartuchos, elementos cilíndricos y medios filtrantes industriales. |
| Elementos coalescentes líquido/líquido y líquido/gas | `Picture23.png`, `Picture24.png`, `Picture25.png` de `Elementos Filtrantes` | Aceptables con el material disponible. Son elementos filtrantes industriales; no hay una foto claramente exclusiva de coalescentes. |
| Carcasas de filtración | `Picture8.png`, `Picture10.png`, `Picture11.png`, `Picture16.png`, `Picture17.png`, `Picture19.png`, `Picture21.png` de `Carcasas` | Correctas. Muestran carcasas, interiores, renders técnicos y conjuntos verticales. |
| Soluciones de filtración paquetizadas | `Picture1.png`, `Picture2.png`, `Picture3.png`, `Picture4.png`, `Picture6.png`, `Picture7.png` de `Equipos` | Correctas. Muestran unidades móviles, skids, bombas, mangueras y tableros. |
| Repuestos para combustibles y fluidos industriales | Mezcla de elementos filtrantes, carcasas y equipo compacto | Correctas. Refuerzan la idea de repuestos y componentes aplicables a sistemas existentes. |
| Servicio técnico aplicado | Mezcla de equipos móviles y carcasas | Correctas. Muestran objetos que se inspeccionan, mantienen o seleccionan durante soporte técnico. |

## Carruseles de servicios

| Apartado | Imágenes usadas | Evaluación |
| --- | --- | --- |
| Ingeniería | `Picture13.png`, `Picture14.png`, `Picture19.png` de `Carcasas` y `Picture4.png` de `Equipos` | Correctas. Se reemplazaron panorámicas por planos, cortes técnicos y equipo real. |
| Asesoramiento y capacitación | `Picture22.png` de `Elementos Filtrantes`, `Picture11.png` de `Carcasas` y `Picture2.png` de `Equipos` | Correctas. Muestran material útil para selección, explicación técnica y capacitación operativa. |
| Mantenimiento y montaje | `Picture15.png`, `Picture20.png` de `Carcasas` y `Picture4.png` de `Equipos` | Correctas. Muestran componentes y equipos vinculados a intervención técnica. |

## Imágenes panorámicas retiradas de carruseles

| Imagen | Uso anterior | Decisión |
| --- | --- | --- |
| `Panoramicas/Picture33.png` | Carrusel de Ingeniería | Retirada. Es minería contextual, no evidencia directa de ingeniería de filtración. |
| `Panoramicas/Picture34.png` | Carrusel de Ingeniería | Retirada. Es minería contextual, no pieza o servicio directo. |
| `Panoramicas/Picture35.png` | Carrusel de Ingeniería | Retirada. Es minería contextual. |
| `Panoramicas/Picture36.png` | Carrusel de Ingeniería | Retirada. Es minería contextual. |
| `Panoramicas/Picture48.png` | Carrusel de Asesoramiento | Retirada del carrusel. Reubicada como imagen ambiental de la sección Nosotros. |
| `Panoramicas/Picture49.png` | Carrusel de Asesoramiento | Retirada del carrusel. Reubicada como imagen principal del Hero. |
| `Panoramicas/Picture51.png` | Carrusel de Asesoramiento | Retirada del carrusel. Reubicada como fondo ambiental del CTA. |

## Imágenes usadas para ambientación

| Sección | Imagen fuente | Archivo procesado | Motivo |
| --- | --- | --- | --- |
| Hero | `Images/Filtracion - Panel/Panoramicas/Picture49.png` | `public/images/pages/hero-planta-fluidos.jpg` | Planta con tuberías amarillas y lectura inmediata de fluidos industriales. Reemplaza las formas geométricas temporales. |
| Nosotros | `Images/Filtracion - Panel/Panoramicas/Picture48.png` | `public/images/pages/about-planta-industrial.jpg` | Vista aérea de planta que refuerza experiencia en procesos industriales. |
| Cierre ambiental | `Images/Filtracion - Panel/Panoramicas/Picture50.png` | `public/images/pages/environment-rana-banner.jpg` | Imagen natural usada como fondo tratado, sin competir con el contenido técnico del sitio. |

## Imágenes procesadas disponibles pero no activas

| Imagen | Motivo |
| --- | --- |
| `public/images/pages/cta-planta-nocturna.jpg` | La sección de cotizaciones previa a contacto fue retirada para evitar redundancia. |
| `public/images/pages/contacto-carcasas-filtracion.jpg` | La imagen lateral de contacto fue retirada para simplificar la sección y priorizar el formulario. |

## Imágenes excluidas del sitio principal por ahora

| Imagen | Motivo |
| --- | --- |
| Panorámicas de minería y fundición no usadas | Son útiles para una futura sección de sectores atendidos, pero no deben mezclarse con carruseles de productos o servicios porque diluyen la lectura técnica. |
