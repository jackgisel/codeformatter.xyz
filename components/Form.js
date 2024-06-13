"use client";

import React from "react";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { json } from "@codemirror/lang-json";
import { python } from "@codemirror/lang-python";
import { useToast } from "@/components/ui/use-toast";
import ActionDropdown from "@/components/ActionDropdown";
import { Button } from "./ui/button";

export default function TextForm({
  defaultLang = "json",
  getLang,
  convertCode,
}) {
  const [value, setValue] = React.useState('{ "hello": "mom" }');
  const [extensions, setExtensions] = React.useState([]);
  const [language, setLanguage] = React.useState(defaultLang);

  const { toast } = useToast();
  const onChange = React.useCallback((val, viewUpdate) => setValue(val), []);
  const getLangFromText = getLang.bind(null, value);
  const convertCodeFromInput = convertCode.bind(null, {
    currentLang: "plain txt",
    wantedLang: "json",
    codeBlock: value,
  });

  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setValue(text);
      await getLangFromText(text)
        .then((res) => setLanguage(res.toLowerCase()))
        .catch((err) => console.log(err));
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      toast({
        title: "Copied!",
        description: "Code snippet was copied.",
      });
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    if (language === "python") {
      setExtensions([python()]);
    } else if (language === "json") {
      setExtensions([json()]);
    } else if (language === "javascript" || language === "auto") {
      setExtensions([javascript({ jsx: true })]);
    }
  }, [language]);

  //   {
  //     'hello': 'mom',
  //     age: None
  //   }

  const formatJson = async () => {
    const jsonString = value;
    try {
      const jsonObj = JSON.parse(jsonString);
      const formatted = JSON.stringify(jsonObj, null, 2);
      setValue(formatted);
    } catch (error) {
      const convertedCode = await convertCodeFromInput("json");
      setValue(convertedCode);
    }
  };

  return (
    <div className="grid w-full gap-2">
      <div className={"relative"}>
        <CodeMirror
          maxWidth={"900px"}
          value={value}
          height="200px"
          extensions={extensions}
          onChange={onChange}
        />
        <span
          className={"text-xs opacity-50 px-1 py-0.5 absolute bottom-1 right-0"}
        >
          {language}
        </span>
      </div>
      <div className={"flex justify-between"}>
        <div className="grid grid-cols-2 gap-3">
          <Button onClick={() => formatJson()}>Format JSON</Button>
          {/* <ActionDropdown
            handleCopy={copyToClipboard}
            handlePaste={pasteFromClipboard}
            handleConvertCode={handleConvertCode}
          /> */}
        </div>
      </div>
    </div>
  );
}
