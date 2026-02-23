import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Button,
  Hr,
} from "@react-email/components";

interface BookingEmailProps {
  name: string;
  carName: string;
  bookingDate: string;
  totalPrice: number;
}

export default function BookingConfirmation({
  name,
  carName,
  bookingDate,
  totalPrice,
}: BookingEmailProps) {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        `}</style>
      </Head>
      <Body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#f2f3f0",
          fontFamily: "Space Grotesk, sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: "520px",
            margin: "0 auto",
            padding: "48px 20px",
          }}
        >
          {/* ── CARD ── */}
          <Section
            style={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            {/* Top accent */}
            <div
              style={{
                height: "4px",
                background: "linear-gradient(90deg, #FE4708, #FEAA0A)",
              }}
            />

            <Section style={{ padding: "40px 40px 36px" }}>
              {/* Brand */}
              <Text
                style={{
                  margin: "0 0 32px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#FE4708",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                Urban Drive
              </Text>

              {/* Headline */}
              <Heading
                style={{
                  margin: "0 0 8px",
                  fontSize: "32px",
                  fontWeight: 900,
                  color: "#2e2e2e",
                  letterSpacing: "-0.5px",
                  lineHeight: "1.1",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                Booking Confirmed 🎉
              </Heading>
              <Text
                style={{
                  margin: "0 0 32px",
                  fontSize: "15px",
                  color: "#888",
                  fontWeight: 400,
                  lineHeight: "1.5",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                Hi {name}, your car is all set. See you on the road.
              </Text>

              <Hr style={{ borderColor: "#f0f0f0", margin: "0 0 28px" }} />

              {/* Details */}
              <Section style={{ marginBottom: "28px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          padding: "12px 0",
                          borderBottom: "1px solid #f0f0f0",
                          fontSize: "13px",
                          color: "#aaa",
                          fontWeight: 600,
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          fontFamily: "Space Grotesk, sans-serif",
                        }}
                      >
                        Vehicle
                      </td>
                      <td
                        style={{
                          padding: "12px 0",
                          borderBottom: "1px solid #f0f0f0",
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "#2e2e2e",
                          textAlign: "right",
                          fontFamily: "Space Grotesk, sans-serif",
                        }}
                      >
                        {carName}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "12px 0",
                          borderBottom: "1px solid #f0f0f0",
                          fontSize: "13px",
                          color: "#aaa",
                          fontWeight: 600,
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          fontFamily: "Space Grotesk, sans-serif",
                        }}
                      >
                        Pickup Date
                      </td>
                      <td
                        style={{
                          padding: "12px 0",
                          borderBottom: "1px solid #f0f0f0",
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "#2e2e2e",
                          textAlign: "right",
                          fontFamily: "Space Grotesk, sans-serif",
                        }}
                      >
                        {bookingDate}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "12px 0",
                          fontSize: "13px",
                          color: "#aaa",
                          fontWeight: 600,
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          fontFamily: "Space Grotesk, sans-serif",
                        }}
                      >
                        Total Paid
                      </td>
                      <td
                        style={{
                          padding: "12px 0",
                          fontSize: "18px",
                          fontWeight: 900,
                          color: "#FE4708",
                          textAlign: "right",
                          fontFamily: "Space Grotesk, sans-serif",
                        }}
                      >
                        ${totalPrice}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Section>

              {/* CTA */}
              <Button
                href="http://localhost:3000/dashboard"
                style={{
                  display: "block",
                  width: "100%",
                  background: "linear-gradient(90deg, #FE4708, #FEAA0A)",
                  color: "#ffffff",
                  padding: "16px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  textAlign: "center",
                  fontFamily: "Space Grotesk, sans-serif",
                  boxSizing: "border-box",
                }}
              >
                View Booking
              </Button>
            </Section>
          </Section>

          {/* Footer */}
          <Text
            style={{
              textAlign: "center",
              marginTop: "28px",
              fontSize: "12px",
              color: "#bbb",
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            © 2026 Urban Drive ·{" "}
            <a
              href="mailto:support@urbandrive.com"
              style={{ color: "#FE4708", textDecoration: "none" }}
            >
              support@urbandrive.com
            </a>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
