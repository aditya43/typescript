function generateError(message: string, errorCode: number): never {
    throw { message, errorCode };
}

generateError('Aditya Testing', 403);