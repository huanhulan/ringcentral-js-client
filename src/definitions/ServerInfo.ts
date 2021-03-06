// Generated Source
import VersionInfo from "./VersionInfo";

interface ServerInfo {

    /**
     * Canonical URI of the API version
     */
    uri?: string;

    /**
     * Full API version information: uri, number, release date
     */
    apiVersions?: VersionInfo[];

    /**
     * Server version
     */
    serverVersion?: string;

    /**
     * Server revision
     */
    serverRevision?: string;
}

export default ServerInfo;
