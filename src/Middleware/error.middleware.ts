export class CustomError extends Error {
    additionalInfo: string;

    constructor(originalError: Error | null | undefined, additionalInfo: string = 'No additional information provided') {
        super(originalError ? originalError.message : 'Unknown error');

        if (originalError) {
            Object.getOwnPropertyNames(originalError).forEach((property) => {
                (this as any)[property] = (originalError as any)[property];
            });
        }

        this.name = 'CustomError';
        this.additionalInfo = additionalInfo;

        throw this;
    }
}