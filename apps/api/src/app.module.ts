import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/module.prisma';
import { MachineModule } from './modules/machine/module.machine';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: "../../.env",
})

@Module({
  imports: [
    PrismaModule,
    MachineModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
