import { Theme } from "./Theme"

type SizePropsType = {
  ff?: string
  fw?: number
  color?: string
  lh?: number
  ls?: number
  Vmin?: number
  Vmax?: number
  PxMax: number
  PxMin: number
}

export const font = ({ff, fw, color, lh, ls, Vmax, Vmin, PxMax, PxMin}: SizePropsType) => `
  font-family: ${ff || 'Nunito Sans, sans-serif'};
  font-weight: ${fw || 400};
  color: ${color || Theme.colors.fontDark};
  line-height: ${lh + 'px' || 1.2};
  letter-spacing: ${ls + 'px' || 0 + 'px'};
  font-size: ${changeSize({PxMax, PxMin, Vmax, Vmin})};
`

export const changeSize = ({PxMax, PxMin, Vmax=1200, Vmin=375}: SizePropsType) => {
  const variablePart = (PxMax - PxMin) / (Vmax - Vmin);
  const rem = parseFloat(((PxMax - Vmax * variablePart) / 16).toFixed(3));
  const vw = parseFloat((100 * variablePart).toFixed(2));

  return `clamp(${PxMin}px, ${rem}rem + ${vw}vw, ${PxMax}px)`
}