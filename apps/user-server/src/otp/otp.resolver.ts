import * as graphql from "@nestjs/graphql";
import { OtpResolverBase } from "./base/otp.resolver.base";
import { Otp } from "./base/Otp";
import { OtpService } from "./otp.service";

@graphql.Resolver(() => Otp)
export class OtpResolver extends OtpResolverBase {
  constructor(protected readonly service: OtpService) {
    super(service);
  }
}
