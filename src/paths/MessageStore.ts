// This is Generated Source.
import MessageInfo from "../definitions/MessageInfo";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";
import Content from "./Content";

export default class MessageStore extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("message-store", id, prv, service);
    }

    /**
     * Internal identifier of a message attachment
     */
    content(id?: string) {
        return new Content(this, id);
    }

    /**
     *  Get Message List
     */
    list(query?: ListQuery): Promise<PagingResult<MessageInfo>> {
        return this.listRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Message List
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

    /**
     *  Delete Message by ID
     */
    delete(query?: DeleteQuery): Promise<void> {
        return this.deleteRaw.apply(this, arguments);
    }

    /**
     *  Delete Message by ID
     *  return {ApiResponse}
     */
    deleteRaw(query?: DeleteQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: query,
        });
    }

    /**
     *  Get Message by ID
     */
    get(): Promise<MessageInfo> {
        return this.getRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Message by ID
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
     *  Update Message by ID
     */
    put(body: PutBody): Promise<MessageInfo> {
        return this.putRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Update Message by ID
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

export interface ListQuery {

    /**
     * Specifies the availability status for the resulting messages. Default value is 'Alive'. Multiple values are accepted
     */
    availability?: "Alive" | "Deleted" | "Purged";

    /**
     * Specifies the conversation identifier for the resulting messages
     */
    conversationId?: number;

    /**
     * The start datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours
     */
    dateFrom?: string;

    /**
     * The end datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
     */
    dateTo?: string;

    /**
     * The direction for the resulting messages. If not specified, both inbound and outbound messages are returned. Multiple values are accepted
     */
    direction?: "Inbound" | "Outbound";

    /**
     * If 'True', then the latest messages per every conversation ID are returned
     */
    distinctConversations?: boolean;

    /**
     * The type of the resulting messages. If not specified, all messages without message type filtering are returned. Multiple values are accepted
     */
    messageType?: "Fax" | "SMS" | "VoiceMail" | "Pager" | "Text";

    /**
     * The read status for the resulting messages. Multiple values are accepted
     */
    readStatus?: "Read" | "Unread";

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;

    /**
     * The phone number. If specified, messages are returned for this particular phone number only
     */
    phoneNumber?: string;
}

export interface DeleteQuery {

    /**
     * If the value is 'True', then the message is purged immediately with all the attachments. The default value is 'False'
     */
    purge?: boolean;

    /**
     * Internal identifier of a message thread
     */
    conversationId?: number;
}

export interface PutBody {

    /**
     * Read status of a message to be changed. Multiple values are accepted
     */
    readStatus?: "Read" | "Unread";
}
