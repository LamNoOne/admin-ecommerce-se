import { FormValidator } from "@syncfusion/ej2-inputs"
import {
    HtmlEditor,
    Image,
    Count,
    Inject,
    Link,
    QuickToolbar,
    RichTextEditorComponent,
    Toolbar,
} from "@syncfusion/ej2-react-richtexteditor"
import * as React from "react"
import { useEffect } from "react"

function Description({ desciption, setDescription}) {
    useEffect(() => {
        const option = {
            rules: {
                "defaultRTE-value": {
                    maxLength: [108, "Maximum 100 character only"],
                    minLength: [15, "Need atleast 8 character length"],
                    required: true,
                },
            },
        }
        formObject = new FormValidator("#myForm", option)

        // Gọi hàm onChangeHandler khi có sự kiện input trên trường nhập liệu
        const richTextEditor = document.getElementById("defaultRTE")
        richTextEditor.addEventListener("change", onChangeHandler)

        return () => {
            // Cleanup để tránh memory leak khi component unmount
            richTextEditor.removeEventListener("change", onChangeHandler)
        }
    }, [])

    let formObject

    function onChangeHandler() {
        const form = document.forms.myForm
        const formData = new FormData(form)
        const rteValue = formData.get("defaultRTE-value")
        // Use this value to the data base or perform any other action.
        setDescription(String(rteValue))
    }

    return (
        <form id="myForm" className="form-vertical">
            <div className="form-group">
                <RichTextEditorComponent
                    id="defaultRTE"
                    htmlAttributes={{ name: "defaultRTE-value" }}
                    className="form-control"
                    height={200}
                    showCharCount={true}
                    maxLength={100}
                    placeholder={"Type something"}
                    change={onChangeHandler}
                    value={desciption}
                >
                    <Inject
                        services={[
                            Toolbar,
                            Image,
                            Link,
                            Count,
                            HtmlEditor,
                            QuickToolbar,
                        ]}
                    />
                </RichTextEditorComponent>
            </div>
            <div className="form-btn-section">
                <button
                    id="reset-btn"
                    className="sample-btn e-control e-btn mt-5"
                    type="reset"
                    data-ripple="true"
                >
                    Reset
                </button>
            </div>
        </form>
    )
}

export default Description
