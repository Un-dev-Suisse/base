import { Module } from '@nestjs/common';
import { ExemplesController } from './exemples.controller';
import { ExemplesService } from './exemples.service';

@Module({
	controllers: [ExemplesController],
	providers: [ExemplesService]
})
export class ExemplesModule {}
