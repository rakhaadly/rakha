import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface ForgotPasswordEmailProps {
    username:string
    resetUrl:string
    userEmail:string
}

const ForgotPasswordEmail = (props:ForgotPasswordEmailProps) => {
  const { username, userEmail, resetUrl } = props;

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Reset your password</Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] mx-auto p-[40px] max-w-[600px]">
            <Section>
              <Heading className="text-[24px] font-bold text-gray-900 mb-[24px] text-center">
                Reset Your Password
              </Heading>

              <Text className="text-[16px] text-gray-700 mb-[24px] leading-[24px]">
                We received a request to reset the password for your account
                associated with {userEmail}.
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[32px] leading-[24px]">
                Click the button below to create a new password:
              </Text>

              <Section className="text-center mb-[32px]">
                <Button
                  href={resetUrl}
                  className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-medium no-underline box-border"
                >
                  Reset Password
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 mb-[16px] leading-[20px]">
                This link will expire in 24 hours for security reasons.
              </Text>

              <Text className="text-[14px] text-gray-600 mb-[24px] leading-[20px]">
                If you didn&apos;t request a password reset, you can safely
                ignore this email. Your password will remain unchanged.
              </Text>

              <Text className="text-[14px] text-gray-600 leading-[20px]">
                If the button above doesn&apos;t work, copy and paste this link
                into your browser:
              </Text>

              <Text className="text-[14px] text-blue-600 break-all">
                <Link href={resetUrl} className="text-blue-600 no-underline">
                  {resetUrl}
                </Link>
              </Text>
            </Section>

            <Section className="border-t border-gray-200 pt-[24px] mt-[40px]">
              <Text className="text-[12px] text-gray-500 text-center m-0 mb-[8px]">
                Best regards,
                <br />
                The Support Team
              </Text>

              <Text className="text-[12px] text-gray-500 text-center m-0 mb-[8px]">
                123 Business Street, Suite 100
                <br />
                City, State 12345
              </Text>

              <Text className="text-[12px] text-gray-500 text-center m-0">
                <Link href="#" className="text-gray-500 no-underline">
                  Unsubscribe
                </Link>
                {" • "}© {new Date().getFullYear()} Rasyid. All rights
                reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ForgotPasswordEmail;