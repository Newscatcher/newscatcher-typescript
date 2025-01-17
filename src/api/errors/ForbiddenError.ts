/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as NewscatcherApi from "../index";

export class ForbiddenError extends errors.NewscatcherApiError {
    constructor(body: NewscatcherApi.Error_) {
        super({
            message: "ForbiddenError",
            statusCode: 403,
            body: body,
        });
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}
