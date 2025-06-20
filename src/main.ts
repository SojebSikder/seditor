import "./style.css";
import { Editor } from "./editor/editor";
import { formattingPlugin } from "./plugins/formatting";
import { undoRedoPlugin } from "./plugins/undoRedo";
import { fontPlugin } from "./plugins/font";
import { colorPickerPlugin } from "./plugins/colorPicker";

const editor = new Editor("#seditor-toolbar", "#seditor-editor");
editor.use(undoRedoPlugin);
editor.use(formattingPlugin);
editor.use(fontPlugin);
editor.use(colorPickerPlugin);

editor.use({
  name: "examplePlugin",
  init(editor) {
    // editor.on("input", ({ html }) => {
    //   // Sync to backend or localStorage
    //   console.log("Real-time HTML:", html);
    // });

    // editor.on("selectionchange", ({ range }) => {
    //   console.log("User moved selection:", range);
    // });

    // editor.on("change", ({ html }) => {
    //   console.log("Content mutated via DOM:", html);
    // });

    // editor.on("contentChange", (html) => {
    //   console.log("Editor content changed:", html);
    // });

    // editor.on("execCommand", (cmd) => {
    //   console.log("Executed formatting:", cmd);
    // });

    editor.addDropdown("formatBlock", {
      text: "Format",
      tooltip: "Text format",
      options: [
        {
          label: "Heading 1",
          value: "h1",
          onSelect: (tag) => {
            editor.exec((frag) => {
              const el = document.createElement(tag);
              el.appendChild(frag);
              return el;
            });
          },
        },
        {
          label: "Paragraph",
          value: "p",
          onSelect: (tag) => {
            editor.exec((frag) => {
              const el = document.createElement(tag);
              el.appendChild(frag);
              return el;
            });
          },
        },
      ],
    });
  },
  destroy(editor) {
    console.log("Plugin cleanup!");
  },
});
