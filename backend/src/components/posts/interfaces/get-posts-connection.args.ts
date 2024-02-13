import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetPostsArgs {
  @Field((type) => [String], { nullable: true })
  type?: string[];

  @Field((type) => [Boolean], { nullable: true })
  ascOrderOption?: boolean;

  @Field((type) => [Number], { nullable: true })
  limit?: number;
}
