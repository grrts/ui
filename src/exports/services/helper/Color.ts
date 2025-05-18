export type ColorType = `var(--color-${string})` | `#${string}` | `rgb(${string})`;

export default function Color(color: string): ColorType {
    return `var(--color-${color})`;
}
