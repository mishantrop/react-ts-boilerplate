export interface UApiGetOperationRequestData {
    operation: {
        ouid: string;
        scope: string[];
    };
    channel: {
        type: 'web_sbol';
    };
}
