const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const otpTimer = useRef(null);
  const [otp, setOtp] = useState(null);
  const [timeLeft, setTimeLeft] = useState(5);
  const [status, setStatus] = useState("idle"); // "idle" | "active" | "expired"

  const handleCountdown = () => {
    const digits = [];
    while (digits.length < 6) {
      digits.push(Math.floor(Math.random() * 10));
    }
    setOtp(digits.join(""));
    setTimeLeft(5);
    setStatus("active");
  };

  useEffect(() => {
    if (status !== "active") return;

    if (timeLeft === 0) {
      setOtp(null);
      setStatus("expired");
      return;
    }

    const timeout = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timeLeft, status]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {status === "active" ? otp : "Click 'Generate OTP' to get a code"}
      </h2>
      <p ref={otpTimer} id="otp-timer" aria-live="assertive">
        {status === "active"
          ? `Expires in: ${timeLeft} seconds`
          : status === "expired"
            ? "OTP expired. Click the button to generate a new OTP"
            : ""}
      </p>
      <button
        id="generate-otp-button"
        type="button"
        onClick={handleCountdown}
        disabled={status === "active"}
      >
        Generate OTP
      </button>
    </div>
  );
};
