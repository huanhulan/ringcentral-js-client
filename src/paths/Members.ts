// This is Generated Source.
import DepartmentResponseExtensionInfo from "../definitions/DepartmentResponseExtensionInfo";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class Members extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("members", id, prv, service);
    }

    /**
     *  Get Department Members
     */
    list(query?: ListQuery): Promise<PagingResult<DepartmentResponseExtensionInfo>> {
        return this.listRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Department Members
     *  return {ApiResponse}
     */
    listRaw(query?: ListQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    }
}

export interface ListQuery {

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
}
