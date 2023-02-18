import { markdownImageRender } from "./image.render";

const SPLIT_FLAG = "---\n";

/**
 * 用来处理文本中的图片数据，考虑到我们的程序会进行大量的计算，
 * 所以图片的处理，全部交给调度器来处理
 */
export async function renderImage(
  filePath: string,
  content: string,
  type: "markdown" = "markdown"
) {
  if (type === "markdown") {
    const { renderBody, renderHeader } = markdownImageRender;
    if (content.includes(SPLIT_FLAG)) {
      return renderBody(filePath, content);
    } else {
      let [header, body] = content.split(SPLIT_FLAG);
      header = await renderHeader(filePath, content);
      body = await renderBody(filePath, content);
      return header + SPLIT_FLAG + body;
    }
  }
  return "";
}
