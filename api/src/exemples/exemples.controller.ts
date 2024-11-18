import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExemplesService } from './exemples.service';
import { CreateExempleDto } from './dtos/exemples.create';

@Controller('exemples')
export class ExemplesController {
	constructor(
		private readonly service: ExemplesService
	) {}

	@Get()
	getExemples() {
		return this.service.getExemples();
	}

	@Post()
	postExemple(@Body() data: CreateExempleDto) {
		return this.service.postExemple(data);
	}
}
