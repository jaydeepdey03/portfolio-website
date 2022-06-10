export default {
    title: "Resume",
    name: "resume",
    type: "document",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        description: "This title will be used as a caption for the download.",
      },
      {
        name: "pdfFile",
        type: "file",
        title: "PDF File",
        options: {
          accept: ".pdf",
        },
        validation: (Rule) => Rule.required(),
        description: "Note that the file name will be visible to end users downloading the file.",
      },
    ],
  };