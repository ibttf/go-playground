// contentlayer.config.js
import { defineNestedType, defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
var NameSlugPair = defineNestedType(() => ({
  name: "NameSlugPair",
  fields: {
    name: {
      type: "string",
      required: true
    },
    slug: {
      type: "string",
      required: true
    }
  }
}));
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    topic: {
      type: "nested",
      of: NameSlugPair,
      required: true
    },
    prev: {
      type: "nested",
      of: NameSlugPair
    },
    next: {
      type: "nested",
      of: NameSlugPair
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ]
    ]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-W7N6UYEI.mjs.map
