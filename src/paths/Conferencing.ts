// This is Generated Source.
import ConferencingInfo from "../definitions/ConferencingInfo";
import ConferencingRequestPhoneNumber from "../definitions/ConferencingRequestPhoneNumber";
import PathSegment from "../PathSegment";

export default class Conferencing extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("conferencing", id, prv, service);
    }

    /**
     *  Get Conferencing info
     */
    get(query?: GetQuery): Promise<ConferencingInfo> {
        return this.getRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Conferencing info
     *  return {ApiResponse}
     */
    getRaw(query?: GetQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    }

    /**
     *  Update Conferencing info
     */
    put(body: PutBody): Promise<ConferencingInfo> {
        return this.putRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Update Conferencing info
     *  return {ApiResponse}
     */
    putRaw(body: PutBody): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}

export interface GetQuery {

    /**
     * Internal identifier of a country. If not specified, the response is returned for the brand country
     */
    countryId?: string;
}

export interface PutBody {

    /**
     * Multiple dial-in phone numbers to connect to audio conference service, relevant for user's brand. Each number is given with the country and location information, in order to let the user choose the less expensive way to connect to a conference. The first number in the list is the primary conference number, that is default and domestic
     */
    phoneNumbers?: ConferencingRequestPhoneNumber[];

    /**
     * Determines if host user allows conference participants to join before the host
     */
    allowJoinBeforeHost?: boolean;
}
