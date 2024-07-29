import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OtpService } from "./otp.service";
import { OtpControllerBase } from "./base/otp.controller.base";

@swagger.ApiTags("otps")
@common.Controller("otps")
export class OtpController extends OtpControllerBase {
  constructor(protected readonly service: OtpService) {
    super(service);
  }
}
