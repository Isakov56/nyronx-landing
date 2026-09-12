/**
 * Opening the consultation dialog from anywhere without threading a prop
 * through Navbar / Pricing / InAction. App listens for this event and owns the
 * modal state; call sites just fire it.
 */
export const CONSULT_EVENT = 'nyronx:consult'

export function openConsultation() {
  window.dispatchEvent(new CustomEvent(CONSULT_EVENT))
}

/** Click handler for anchors/buttons that should open the dialog instead of
 *  navigating. Keeps the href in the markup as a no-JS fallback. */
export function consultClick(e) {
  e.preventDefault()
  openConsultation()
}
