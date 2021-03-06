import { expectType } from "tsd";
import { decrypt, encrypt } from "@example/env";

// DECRYPT
const { decryptedEnvs, decryptedResult} = decrypt({
  algorithm: "aes-256-cbc",
  envs: "d4b6baef6ae9313a17b3f736a4e28ba35f4f23a74397a06f75fefe7acc777b81570a12ccee82ff4e2c05f148dce3b17c", encoding: "utf8",
  input: "hex",
  iv: "507e1b56bd09de07",
  secret: "abcdefghijklmnopqrstuv1234567890"
});

expectType<string>(decryptedEnvs);
expectType<any>(decryptedResult);

// ENCRYPT
const envString = JSON.stringify({
  ABC: "123",
  DEF: "678",
  HIJ: "$ABC$DEF",
});

const { encryptedEvs, iv} = encrypt({
  algorithm: "aes-256-cbc",
  envs: envString,
  encoding: "utf8",
  input: "hex",
  secret: "abcdefghijklmnopqrstuv1234567890"
});

expectType<string>(encryptedEvs);
expectType<string>(iv);



