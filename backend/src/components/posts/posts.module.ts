import { Module } from '@nestjs/common';
import { PostsResolver } from 'src/components/posts/post.resolvers';

@Module({
  providers: [PostsResolver],
})
export class PostsModule { }
