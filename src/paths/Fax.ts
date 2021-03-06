import * as FormData from "form-data";
import Binary from "../Binary";
import MessageInfo from "../definitions/MessageInfo";
import PathSegment from "../PathSegment";
import FaxBase, { PostBody } from "./FaxBase";

export default class Fax extends FaxBase {
    constructor(prv: PathSegment, id?: string, service?) {
        super(prv, id, service);
    }

    /**
     *  Create and Send Fax Message
     */
    post(body: PostBody, attachments: Binary[]): Promise<MessageInfo> {
        const meta = JSON.stringify(body);
        const form = new FormData();
        const jsonType = "application/json";
        if (inNode()) {
            form.append("json", meta, { contentType: jsonType, filename: "request.json" });
            for (const atch of attachments) {
                if (typeof atch === "string") {
                    form.append("attachment", atch, { contentType: "text/plain" });
                } else {
                    form.append("attachment", atch);
                }
            }
        } else if (browserSupportBlob()) {
            form.append("json", new Blob([meta], { type: jsonType }));
            for (const atch of attachments) {
                if (typeof atch === "string") {
                    form.append("attachment", new Blob([atch], { type: "text/plain" }));
                } else {
                    form.append("attachment", atch);
                }
            }
        } else {
            return Promise.reject("Your're not in node and your environment does not support Blob or File API.");
        }
        return this._getService().post(this.getEndpoint(false), form).then((res) => res.json());
    }
}

export { PostBody };

function inNode(): boolean {
    return typeof process !== "undefined" && !process["browser"];
}

function browserSupportBlob(): boolean {
    return typeof Blob === "function";
}
