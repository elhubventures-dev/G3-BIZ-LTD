import DOMPurify from "isomorphic-dompurify";

interface ContentRendererProps {
  html: string;
  className?: string;
}

export function ContentRenderer({ html, className }: ContentRendererProps) {
  if (!html) return null;

  const sanitized = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      "h1", "h2", "h3", "h4", "h5", "h6",
      "p", "br", "ul", "ol", "li",
      "a", "strong", "b", "em", "i", "u",
      "img", "blockquote", "cite",
      "table", "thead", "tbody", "tr", "th", "td",
      "div", "span", "sup", "sub",
    ],
    ALLOWED_ATTR: ["href", "src", "alt", "title", "class", "target", "rel"],
  });

  const processed = sanitized
    .replace(/https:\/\/g3-bizltd\.com\/wp-content\/uploads\//g, "/images/uploads/")
    .replace(/src="\/images\/uploads\//g, 'src="/images/uploads/');

  return (
    <div
      className={`prose-content ${className ?? ""}`}
      dangerouslySetInnerHTML={{ __html: processed }}
    />
  );
}
