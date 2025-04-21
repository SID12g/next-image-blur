import { getPlaiceholder } from "plaiceholder";
import fs from "fs";
import path from "path";

const getBlurDataUrl = async (imgSrc: string) => {
  try {
    if (imgSrc.startsWith("/")) {
      const publicDir = path.join(process.cwd(), "public");
      const filePath = path.join(publicDir, imgSrc);

      if (!fs.existsSync(filePath)) {
        console.error(`Image file does not exist: ${filePath}`);
        return "";
      }

      const buffer = fs.readFileSync(filePath);
      const { base64 } = await getPlaiceholder(buffer, { size: 10 });
      return base64;
    } else {
      const buffer = await fetch(imgSrc).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
      );
      const { base64 } = await getPlaiceholder(buffer, { size: 10 });
      return base64;
    }
  } catch (e) {
    console.error("Blur Image Error:", e);
    return "";
  }
};

export default getBlurDataUrl;
