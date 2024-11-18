import { Injectable } from '@nestjs/common';
import { CreateExempleDto } from './dtos/exemples.create';

@Injectable()
export class ExemplesService {
	getExemples() {
		return "Exemple disponible";
	}

	postExemple(data: CreateExempleDto) {
		return data;
	}
}
