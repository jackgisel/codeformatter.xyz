"use client"

import React from 'react'

import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'

import { python } from '@codemirror/lang-python'
import {useToast} from "@/components/ui/use-toast"

export default function TextForm({ defaultLang = "auto", getLang, convertCode }) {
    const [value, setValue] = React.useState("console.log('hello world!');")
    const [extensions, setExtensions] = React.useState([])
    const [language, setLanguage] = React.useState(defaultLang)

    const { toast } = useToast()
    const onChange = React.useCallback((val, viewUpdate) => setValue(val), [])
    const getLangFromText = getLang.bind(null, value)
    const convertCodeFromInput = (desiredLang) => {
        return convertCode.bind(null, {
            currentLang: language,
            wantedLang: desiredLang,
            codeBlock: value
        })
    }

    const pasteFromClipboard = async () => {
        try {
            const text = await navigator.clipboard.readText()
            setValue(text)
            await getLangFromText(text)
                .then(res => setLanguage(res.toLowerCase()))
                .catch(err => console.log(err))
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err)
        }
    }

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(value)
            toast({
                title: "Copied!",
                description: "Code snippet was copied.",
            })
        } catch (err) {
            console.error(err)
        }
    }

    React.useEffect(() => {
        if (language === "python") {
            setExtensions([python()])
        } else if (language === "javascript" || language === "auto") {
            setExtensions([javascript({ jsx: true })])
        }
    }, [language])

    const handleConvertCode = React.useCallback(async (lang) => {
        setLanguage(lang)
        const convertedCode = await convertCodeFromInput(lang)
        console.log(convertedCode)
        setValue(convertedCode)
    }, [convertCodeFromInput])

    return (
        <div className="grid w-full gap-2">
            <div className={"relative"}>
                <CodeMirror maxWidth={"900px"} value={value} height="200px" extensions={extensions} onChange={onChange}/>
                <span className={'text-xs opacity-50 px-1 py-0.5 absolute bottom-1 right-0'}>{language}</span>
            </div>
        </div>
    )
}