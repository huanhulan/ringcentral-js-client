// This is Generated Source.
import PathSegment from "../PathSegment";

export default class End extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("end", id, prv, service);
    }

    /**
     *  End Current Meeting
     */
    post(): Promise<void> {
        return this.postRaw.apply(this, arguments);
    }

    /**
     *  End Current Meeting
     *  return {ApiResponse}
     */
    postRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}
