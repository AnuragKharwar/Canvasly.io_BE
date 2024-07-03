import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TeamsModule } from './teams/teams.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://anuragkharwar:ZVF3WGVqgP8mJOEs@eraserclone.airf46g.mongodb.net/?retryWrites=true&w=majority&appName=EraserClone',
    ),
    UsersModule,
    TeamsModule,
    FilesModule,
  ],
})
export class AppModule {}
