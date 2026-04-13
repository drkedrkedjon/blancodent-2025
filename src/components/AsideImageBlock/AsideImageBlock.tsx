import Image, { StaticImageData } from "next/image";
import styles from "./AsideImageBlock.module.css";

type AsideImageBlockProps = {
  url1: StaticImageData;
  url2: StaticImageData;
  url3: StaticImageData;
  url4: StaticImageData;
};

export default async function AsideImageBlock({
  url1,
  url2,
  url3,
  url4,
}: AsideImageBlockProps) {
  return (
    <aside
      aria-hidden={true}
      className={styles.aside}
    >
      <Image
        src={url1}
        alt=""
      />
      <Image
        src={url2}
        alt=""
      />
      <Image
        src={url3}
        alt=""
      />
      <Image
        src={url4}
        alt=""
      />
    </aside>
  );
}
