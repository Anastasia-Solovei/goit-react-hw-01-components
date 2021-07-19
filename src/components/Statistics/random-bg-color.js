export default function randomBgColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${r},${g},${b})`;
  return bgColor;
}
