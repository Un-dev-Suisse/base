import { Module } from '@nestjs/common';
import { ExemplesModule } from './exemples/exemples.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
	imports: [ExemplesModule],
})
export class AppModule {}
