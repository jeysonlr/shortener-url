"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_module_1 = require("./app.module");
const core_1 = require("@nestjs/core");
const pipes_1 = require("./shared/pipes");
const exceptions_1 = require("./shared/exceptions");
const shortener_module_1 = require("./shortener/shortener.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: [/http:\/\/localhost\:\d{4}/],
        methods: ['GET', 'PUT', 'POST', 'OPTIONS'],
        allowedHeaders: ['Access-Control-Allow-Origin'],
        credentials: true
    });
    app.useGlobalPipes(new pipes_1.ValidationPipe());
    app.useGlobalFilters(new exceptions_1.HttpExceptionFilter());
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Project Shortener')
        .setDescription('The API description')
        .setVersion('1.0.0')
        .setContact('Jeyson Luiz Romualdo', 'https://www.linkedin.com/in/jeyson-luiz-romualdo-86992995', 'jeysonlr@gmail.com')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options, {
        include: [
            shortener_module_1.ShortenerModule,
        ],
    });
    swagger_1.SwaggerModule.setup('documentation', app, document);
    await app.listen(8081);
}
bootstrap();
//# sourceMappingURL=main.js.map