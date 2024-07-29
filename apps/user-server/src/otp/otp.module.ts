import { Module } from "@nestjs/common";
import { OtpModuleBase } from "./base/otp.module.base";
import { OtpService } from "./otp.service";
import { OtpController } from "./otp.controller";
import { OtpResolver } from "./otp.resolver";

@Module({
  imports: [OtpModuleBase],
  controllers: [OtpController],
  providers: [OtpService, OtpResolver],
  exports: [OtpService],
})
export class OtpModule {}
