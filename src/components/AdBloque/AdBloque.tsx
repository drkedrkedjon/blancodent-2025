import { StaticImageData } from "next/image";

interface ChildComponentProps {
  t: (key: string) => string;
  image: StaticImageData;
  direction: string;
}

export default function AdBloque({ t, image, direction }: ChildComponentProps) {
  return <h1>Ad Bloque</h1>;
}
