import Script from "next/script";
import { useRef } from "react";
// import TextEditor from "../../components/TextEditor";

function WritingPage() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      //   console.log(editorRef.current.getContent());
    }
  };
  return (
    <main className="md:container md:mx-auto">
      {/* <Script
        src="/path/or/uri/to/tinymce.min.js"
        referrerPolicy="origin"
      ></Script> */}
      {/* <TextEditor
        onInit={(evt: Event, editor: null) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "anchor",
            "autolink",
            "help",
            "image",
            "link",
            "lists",
            "searchreplace",
            "table",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      /> */}
    </main>
  );
}

export default WritingPage;
