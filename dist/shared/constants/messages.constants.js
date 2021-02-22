"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUCCESS_MESSAGES = exports.ERROR_MESSAGES = exports.HTTP_SUCCESS_MESSAGES = exports.HTTP_ERROR_MESSAGES = void 0;
exports.HTTP_ERROR_MESSAGES = {
    BAD_REQUEST: 'Bad request',
    UNAUTHORIZED: 'Unauthorized',
    NOT_FOUND: 'Not found',
    TOO_MANY_REQUEST_ERROR: 'Too many requests, please try again later'
};
exports.HTTP_SUCCESS_MESSAGES = {
    OK: 'Success',
    CREATED: 'Created'
};
exports.ERROR_MESSAGES = {
    INTERNAL_ERROR: 'Erro interno',
    REQUEST_ERROR: 'Dados da requisição inválidos',
    CONTACT_SUPPORT: 'Contacte o suporte',
    NO_REQUEST_BODY_SENT: 'Corpo não enviado na requisição',
    FILE_NOT_FOUND_ERROR: 'Arquivo não encontrado',
    OPEN_FILE_ERROR: 'Erro ao abrir arquivo',
    READ_FILE_ERROR: 'Erro ao ler arquivo',
    READ_DQL_FILE_ERROR: 'Erro ao ler arquivo dql',
    TOO_MANY_REQUEST_ERROR: 'Muitas requisições simultâneas. Tente novamente mais tarde.',
    TYPE_USER_MASTER_ERROR: 'Rota permitida apenas para usuários master.',
    TYPE_USER_DEV_ERROR: 'Rota permitida apenas para usuários desenvolvedores.',
};
exports.SUCCESS_MESSAGES = {
    OK: 'Sucesso'
};
//# sourceMappingURL=messages.constants.js.map