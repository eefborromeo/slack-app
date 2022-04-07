import React from "react";
import { BiSend } from "react-icons/bi"
import { MessageBoxLayout } from "../styles";

export default function MessageBox() {
    return (
        <MessageBoxLayout>
            <textarea></textarea>
            <button type="submit"><BiSend /></button>
        </MessageBoxLayout>
    )
}