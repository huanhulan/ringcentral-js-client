// This is Generated Source.
import MeetingInfo from "../definitions/MeetingInfo";
import MeetingScheduleInfo from "../definitions/MeetingScheduleInfo";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";
import End from "./End";
import ServiceInfo from "./ServiceInfo";

export default class Meeting extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("meeting", id, prv, service);
    }

    /**
     * 
     */
    serviceInfo(id?: string) {
        return new ServiceInfo(this, id);
    }

    /**
     * 
     */
    end(id?: string) {
        return new End(this, id);
    }

    /**
     *  Create Meeting
     */
    post(body: PostBody): Promise<MeetingInfo> {
        return this.postRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Create Meeting
     *  return {ApiResponse}
     */
    postRaw(body: PostBody): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  Get Meetings List
     */
    list(): Promise<PagingResult<MeetingInfo>> {
        return this.listRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Meetings List
     *  return {ApiResponse}
     */
    listRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        });
    }

    /**
     *  Delete Meeting
     */
    delete(): Promise<void> {
        return this.deleteRaw.apply(this, arguments);
    }

    /**
     *  Delete Meeting
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }

    /**
     *  Get Meeting
     */
    get(): Promise<MeetingInfo> {
        return this.getRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Meeting
     *  return {ApiResponse}
     */
    getRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }

    /**
     *  Update Meeting
     */
    put(body: PutBody): Promise<MeetingInfo> {
        return this.putRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Update Meeting
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

export interface PostBody {

    /**
     * Topic of a meeting
     */
    topic?: string;

    /**
     * Type of a meeting. 'Instant' - meeting that is instantly started as soon as the host creates it; 'Scheduled' - common scheduled meeting; 'Recurring' - a recurring meeting. If the specified meeting type is 'Scheduled' then schedule property is mandatory for request
     */
    meetingType?: "Scheduled" | "Instant" | "Recurring";

    /**
     * Password required to join a meeting. Max number of characters is 10
     */
    password?: string;

    /**
     * Schedule of a meeting
     */
    schedule?: MeetingScheduleInfo;

    /**
     * If 'True' then the meeting can be joined and started by any participant (not host only). Supported for the meetings of 'Scheduled' and 'Recurring' type.
     */
    allowJoinBeforeHost?: boolean;

    /**
     * Enables starting video when host joins the meeting
     */
    startHostVideo?: boolean;

    /**
     * Enables starting video when participants join the meeting
     */
    startParticipantsVideo?: boolean;

    /**
     * Meeting audio options. Possible values are 'Phone', 'ComputerAudio'
     */
    audioOptions?: string[];
}

export interface PutBody {

    /**
     * Topic of a meeting
     */
    topic?: string;

    /**
     * Type of a meeting. 'Instant' - meeting that is instantly started as soon as the host creates it; 'Scheduled' - common scheduled meeting; 'Recurring' - a recurring meeting. If the specified meeting type is 'Scheduled' then schedule property is mandatory for request
     */
    meetingType?: "Scheduled" | "Instant" | "Recurring";

    /**
     * Password required to join a meeting. Max number of characters is 10
     */
    password?: string;

    /**
     * Schedule of a meeting
     */
    schedule?: MeetingScheduleInfo;

    /**
     * If 'True' then the meeting can be joined and started by any participant (not host only). Supported for the meetings of 'Scheduled' and 'Recurring' type.
     */
    allowJoinBeforeHost?: boolean;

    /**
     * Enables starting video when host joins the meeting
     */
    startHostVideo?: boolean;

    /**
     * Enables starting video when participants join the meeting
     */
    startParticipantsVideo?: boolean;

    /**
     * Meeting audio options. Possible values are 'Phone', 'ComputerAudio'
     */
    audioOptions?: string[];
}
